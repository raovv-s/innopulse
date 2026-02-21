from database import SessionLocal
import models

def seed_more():
    db = SessionLocal()
    
    new_startups = [
        {
            "name": "Mistral AI",
            "sector": "Large Language Models",
            "github_url": "https://github.com/mistralai/mistral-src",
            "description": "European AI champion developing efficient and open-weights LLMs.",
            "tech_stack": "Python, CUDA, PyTorch",
            "health_score": 98.0,
            "status": "Scale",
            "ai_recommendation": "Strong community support. Excellent choice for private deployments."
        },
        {
            "name": "Vercel",
            "sector": "Cloud Computing / Frontend",
            "github_url": "https://github.com/vercel/next.js",
            "description": "The platform for frontend developers, providing the speed and reliability they need.",
            "tech_stack": "Rust, TypeScript, Go",
            "health_score": 96.0,
            "status": "Scale",
            "ai_recommendation": "Dominating the web development ecosystem. High developer retention."
        },
        {
            "name": "Hugging Face",
            "sector": "AI Community / DevOps",
            "github_url": "https://github.com/huggingface/transformers",
            "description": "The hub for machine learning models and datasets.",
            "tech_stack": "Python, Rust",
            "health_score": 97.5,
            "status": "Scale",
            "ai_recommendation": "The 'GitHub of Machine Learning'. Essential infrastructure for modern AI apps."
        },
        {
            "name": "Pinecone",
            "sector": "Vector Databases",
            "github_url": "https://github.com/pinecone-io/docs",
            "description": "A vector database that makes it easy to build high-performance vector search applications.",
            "tech_stack": "Go, C++, Kubernetes",
            "health_score": 88.0,
            "status": "MVP",
            "ai_recommendation": "Critical for RAG-based AI applications. Growing market share."
        },
        {
            "name": "Appwrite",
            "sector": "Backend as a Service",
            "github_url": "https://github.com/appwrite/appwrite",
            "description": "Secure open-source backend for web, mobile & flutter developers.",
            "tech_stack": "PHP, Docker, Swoole",
            "health_score": 85.0,
            "status": "MVP",
            "ai_recommendation": "Excellent open-source alternative to Firebase. Highly modular architecture."
        }
    ]

    for s in new_startups:
        # Eyni adda startapın olub-olmadığını yoxlayırıq
        exists = db.query(models.Startup).filter(models.Startup.name == s["name"]).first()
        if not exists:
            new_obj = models.Startup(**s)
            db.add(new_obj)
            print(f"Əlavə edildi: {s['name']}")
    
    db.commit()
    db.close()
    print("Baza yeni startaplarla zənginləşdirildi! 🚀🔥")

if __name__ == "__main__":
    seed_more()