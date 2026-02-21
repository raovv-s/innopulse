from pydantic import BaseModel, ConfigDict, computed_field
from typing import Optional, List

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

    # Frontend-in gözlədiyi adlarla uyğunlaşdırma (Alias)
    @computed_field
    def score(self) -> float:
        return self.health_score

    @computed_field
    def insight(self) -> Optional[str]:
        return self.ai_recommendation

    @computed_field
    def repo(self) -> str:
        return self.github_url

    # Hackathon üçün boş massivlər (Frontend xəta verməsin deyə)
    @computed_field
    def history(self) -> List[float]:
        return [self.health_score]

    model_config = ConfigDict(from_attributes=True)