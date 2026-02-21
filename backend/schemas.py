from pydantic import BaseModel, HttpUrl, ConfigDict, Field
from typing import Optional

class StartupBase(BaseModel):
    """Shared attributes for Startup models."""
    name: str = Field(..., min_length=1, max_length=255, examples=["InnoPulse AI"])
    sector: str = Field(..., min_length=1, max_length=100, examples=["FinTech"])
    github_url: str = Field(..., examples=["https://github.com/innopulse/core"])

class StartupCreate(StartupBase):
    """Schema for creating a new Startup (Input validation)."""
    pass

class StartupResponse(StartupBase):
    """Schema for returning Startup data (Output serialization)."""
    id: int
    health_score: float
    status: str
    ai_recommendation: Optional[str] = None

    # Pydantic V2 configuration to support SQLAlchemy models
    model_config = ConfigDict(from_attributes=True)

class StartupUpdate(BaseModel):
    """Optional schema for AI agents to update health metrics."""
    health_score: Optional[float] = None
    status: Optional[str] = None
    ai_recommendation: Optional[str] = None
    
    model_config = ConfigDict(from_attributes=True)
