from sqlalchemy import func

@router.get("/analytics/summary")
def get_analytics(db: Session = Depends(get_db)):
    """
    Ekosistemin ümumi statistikasını qaytarır.
    """
    total_startups = db.query(models.Startup).count()
    avg_score = db.query(func.avg(models.Startup.health_score)).scalar() or 0
    
    # Sektorlar üzrə paylanma
    sector_distribution = db.query(
        models.Startup.sector, 
        func.count(models.Startup.id).label("count")
    ).group_by(models.Startup.sector).all()

    return {
        "total": total_startups,
        "average_health": round(avg_score, 2),
        "sectors": {s.sector: s.count for s in sector_distribution}
    }