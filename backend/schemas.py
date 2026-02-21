from pydantic import BaseModel, ConfigDict
from typing import Optional

class StartupBase(BaseModel):
    name: str
    sector: str
    github_url: str
    description: Optional[str] = None
    tech_stack: Optional[str] = None

class StartupCreate(StartupBase):
    pass

class StartupResponse(StartupBase):
    id: int
    health_score: float
    status: str
    ai_recommendation: Optional[str] = None
    model_config = ConfigDict(from_attributes=True)