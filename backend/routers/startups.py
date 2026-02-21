from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy import func
from typing import List

# Import our local modules
import models
import schemas
from database import get_db
from ai_agents.analyst_agent import analyze_startup_with_ai

# 1. Router-i başladırıq (Mütləq bütün endpoint-lərdən YUXARIDA olmalıdır)
router = APIRouter(
    prefix="/api/startups",
    tags=["Startups"]
)

# --- ANALYTICS ENDPOINT ---
@router.get("/analytics/summary")
def get_analytics(db: Session = Depends(get_db)):
    """
    Ekosistemin ümumi statistikasını qaytarır.
    """
    total_startups = db.query(models.Startup).count()
    avg_score = db.query(func.avg(models.Startup.health_score)).scalar() or 0
    
    sector_distribution = db.query(
        models.Startup.sector, 
        func.count(models.Startup.id).label("count")
    ).group_by(models.Startup.sector).all()

    return {
        "total": total_startups,
        "average_health": round(avg_score, 2),
        "sectors": {s.sector: s.count for s in sector_distribution}
    }

# --- CRUD ENDPOINTS ---

@router.post("/", response_model=schemas.StartupResponse, status_code=status.HTTP_201_CREATED)
def create_startup(startup: schemas.StartupCreate, db: Session = Depends(get_db)):
    """Yeni startap əlavə edir."""
    existing_startup = db.query(models.Startup).filter(
        models.Startup.github_url == str(startup.github_url)
    ).first()
    
    if existing_startup:
        raise HTTPException(status_code=400, detail="GitHub URL artıq qeydiyyatdan keçib.")

    new_startup = models.Startup(**startup.model_dump())
    db.add(new_startup)
    db.commit()
    db.refresh(new_startup)
    return new_startup

@router.get("/", response_model=List[schemas.StartupResponse])
def list_startups(db: Session = Depends(get_db)):
    """Bütün startapların siyahısını qaytarır."""
    return db.query(models.Startup).all()

@router.get("/{startup_id}", response_model=schemas.StartupResponse)
def get_startup(startup_id: int, db: Session = Depends(get_db)):
    """Bir startap haqqında ətraflı məlumat qaytarır."""
    startup = db.get(models.Startup, startup_id)
    if not startup:
        raise HTTPException(status_code=404, detail="Startap tapılmadı.")
    return startup

# --- AI ANALYZE ENDPOINT ---

@router.post("/{startup_id}/analyze", response_model=schemas.StartupResponse)
def analyze_startup(startup_id: int, db: Session = Depends(get_db)):
    """AI Agent-i işə salaraq startapı analiz edir."""
    db_startup = db.get(models.Startup, startup_id)
    if not db_startup:
        raise HTTPException(status_code=404, detail="Startap tapılmadı.")

    try:
        ai_result = analyze_startup_with_ai(
            startup_name=db_startup.name, 
            github_url=db_startup.github_url
        )
        
        db_startup.health_score = ai_result.get("health_score", 0.0)
        db_startup.status = ai_result.get("status", "Risk")
        db_startup.ai_recommendation = ai_result.get("ai_recommendation")

        db.commit()
        db.refresh(db_startup)
        
        return db_startup

    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"AI Analiz xətası: {str(e)}")