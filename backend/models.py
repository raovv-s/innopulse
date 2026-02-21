from sqlalchemy import String, Float, Index
from sqlalchemy.orm import Mapped, mapped_column
from typing import Optional
from .database import Base

class Startup(Base):
    __tablename__ = "startups"

    # Primary Key with Indexing
    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    
    # Required Fields
    name: Mapped[str] = mapped_column(String(255), nullable=False, index=True)
    sector: Mapped[str] = mapped_column(String(100), nullable=False)
    
    # Unique GitHub URL for tracking
    github_url: Mapped[str] = mapped_column(String(500), nullable=False, unique=True)
    
    # AI-Generated Analytics Fields
    health_score: Mapped[float] = mapped_column(Float, default=0.0)
    
    # Status: Pending Analysis, Scale, MVP, or Risk
    status: Mapped[str] = mapped_column(String(50), default="Pending Analysis")
    
    # Optional field for AI recommendation text
    ai_recommendation: Mapped[Optional[str]] = mapped_column(String(2000), nullable=True)

    def __repr__(self) -> str:
        return f"<Startup(name={self.name}, status={self.status}, score={self.health_score})>"