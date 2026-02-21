import os
from typing import Generator
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase, Session

# Load environment variables from .env
load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise ValueError("DATABASE_URL not found in environment variables.")

# Optimal parameters for Serverless Postgres (NeonDB):
# 1. pool_pre_ping=True: Checks if connection is alive before using it (fixes cold-start drops).
# 2. pool_size/max_overflow: Managed for typical serverless concurrency.
# 3. pool_recycle: Recycles connections every hour to prevent stale connections.
engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,
    pool_size=5,
    max_overflow=10,
    pool_recycle=3600,
    connect_args={"sslmode": "require"}  # Required for NeonDB
)

# Create a session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# SQLAlchemy 2.0 Style Declarative Base
class Base(DeclarativeBase):
    pass

# FastAPI Dependency
def get_db() -> Generator[Session, None, None]:
    """
    Dependency function to provide a database session per request.
    Ensures the session is closed after the request is finished.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()