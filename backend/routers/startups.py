from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

# Import our local modules
import models
import schemas
from database import get_db

# BU ÇOX VACİBDİR: AI funksiyasını bura import edirik
from ai_agents.analyst_agent import analyze_startup_with_ai

router = APIRouter(
    prefix="/api/startups",
    tags=["Startups"]
)

@router.post("/", response_model=schemas.StartupResponse, status_code=status.HTTP_201_CREATED)
def create_startup(startup: schemas.StartupCreate, db: Session = Depends(get_db)):
    """
    Registers a new startup in the InnoPulse system.
    """
    existing_startup = db.query(models.Startup).filter(
        models.Startup.github_url == str(startup.github_url)
    ).first()
    
    if existing_startup:
        raise HTTPException(
            status_code=400, 
            detail="A startup with this GitHub URL is already registered."
        )

    new_startup = models.Startup(**startup.model_dump())
    
    db.add(new_startup)
    db.commit()
    db.refresh(new_startup)
    return new_startup

@router.get("/", response_model=List[schemas.StartupResponse])
def list_startups(db: Session = Depends(get_db)):
    """
    Retrieves all startups currently tracked.
    """
    return db.query(models.Startup).all()

@router.get("/{startup_id}", response_model=schemas.StartupResponse)
def get_startup(startup_id: int, db: Session = Depends(get_db)):
    """
    Retrieves detailed information for a specific startup.
    """
    startup = db.get(models.Startup, startup_id)
    if not startup:
        raise HTTPException(status_code=404, detail="Startup not found.")
    return startup

@router.post("/{startup_id}/analyze", response_model=schemas.StartupResponse)
def analyze_startup(startup_id: int, db: Session = Depends(get_db)):
    """
    Triggers the AI Analyst Agent to research the startup and update its metrics.
    """
    # 1. Bazadan startapı tap
    db_startup = db.get(models.Startup, startup_id)
    if not db_startup:
        raise HTTPException(status_code=404, detail="Startup not found.")

    # 2. AI Analizi işə sal
    try:
        ai_result = analyze_startup_with_ai(
            startup_name=db_startup.name, 
            github_url=db_startup.github_url
        )
        
        # 3. Bazanı AI-dan gələn nəticələrlə yenilə
        db_startup.health_score = ai_result.get("health_score", 0.0)
        db_startup.status = ai_result.get("status", "Risk")
        db_startup.ai_recommendation = ai_result.get("ai_recommendation")

        db.commit()
        db.refresh(db_startup)
        
        return db_startup

    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=500, 
            detail=f"AI Analysis failed: {str(e)}"
        )