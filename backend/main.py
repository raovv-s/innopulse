from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import database engine and models to initialize tables
import models
from database import engine
from routers import startups

# Automatically create tables in NeonDB on startup
# Note: In a production evolution, we would switch this to Alembic migrations.
models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="InnoPulse API",
    description="AI-Powered Startup Health & Lifecycle Tracker Backend",
    version="1.0.0"
)

# Configure CORS: Essential for Hackathon frontend integration (React/Vue/Next.js)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins for development flexibility
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Allows all headers
)

# Include our modular routers
app.include_router(startups.router)

@app.get("/")
async def root():
    """
    Root endpoint to verify the API is alive.
    """
    return {
        "message": "Welcome to InnoPulse API",
        "docs": "/docs",
        "status": "Running"
    }

if __name__ == "__main__":
    import uvicorn
    # For local testing
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)