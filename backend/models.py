from sqlalchemy import String, Float, Text, Integer
from sqlalchemy.orm import Mapped, mapped_column, DeclarativeBase
from typing import Optional
from database import Base # Əgər database.py-da Base artıq varsa

class User(Base):
    __tablename__ = "users"
    
    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    username: Mapped[str] = mapped_column(String(50), unique=True, index=True)
    hashed_password: Mapped[str] = mapped_column(String(255))

class Startup(Base):
    __tablename__ = "startups"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(255), nullable=False, index=True)
    sector: Mapped[str] = mapped_column(String(100), nullable=False)
    github_url: Mapped[str] = mapped_column(String(500), nullable=False, unique=True)
    
    description: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    tech_stack: Mapped[Optional[str]] = mapped_column(String(500), nullable=True)
    
    health_score: Mapped[float] = mapped_column(Float, default=0.0)
    status: Mapped[str] = mapped_column(String(50), default="Pending Analysis")
    ai_recommendation: Mapped[Optional[str]] = mapped_column(Text, nullable=True)