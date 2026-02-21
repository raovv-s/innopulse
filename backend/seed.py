from database import SessionLocal, engine
import models

def seed_data():
    db = SessionLocal()
    # Köhnə datanı silmək istəsən: models.Base.metadata.drop_all(bind=engine)
    models.Base.metadata.create_all(bind=engine)

    startups = [
        {
            "name": "LangChain",
            "sector": "AI Infrastructure",
            "github_url": "https://github.com/langchain-ai/langchain",
            "description": "Framework for developing applications powered by language models.",
            "tech_stack": "Python, TypeScript",
            "health_score": 95.0,
            "status": "Scale"
        },
        {
            "name": "Supabase",
            "sector": "Backend as a Service",
            "github_url": "https://github.com/supabase/supabase",
            "description": "The open source Firebase alternative.",
            "tech_stack": "PostgreSQL, Go, TypeScript",
            "health_score": 92.0,
            "status": "Scale"
        },
        {
            "name": "AutoGPT",
            "sector": "Autonomous Agents",
            "github_url": "https://github.com/Significant-Gravitas/Auto-GPT",
            "description": "An experimental open-source attempt to make GPT-4 fully autonomous.",
            "tech_stack": "Python",
            "health_score": 78.0,
            "status": "MVP"
        }
    ]

    for s in startups:
        exists = db.query(models.Startup).filter(models.Startup.name == s["name"]).first()
        if not exists:
            new_startup = models.Startup(**s)
            db.add(new_startup)
    
    db.commit()
    db.close()
    print("NeonDB uğurla dolduruldu! 🚀")

if __name__ == "__main__":
    seed_data()