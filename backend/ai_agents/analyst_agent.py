import os
from typing import Literal
from pydantic import BaseModel, Field
from agno.agent import Agent
from agno.models.openai import OpenAIChat
from ai_agents.tools import search_startup_info

# 1. Çıxış sxemini təyin edirik
class StartupAnalysisResult(BaseModel):
    """Startapın sağlamlığının strukturlaşdırılmış analizi."""
    health_score: int = Field(..., description="0-dan 100-ə qədər bal", ge=0, le=100)
    status: Literal["Scale", "MVP", "Risk"] = Field(..., description="Həyat dövrü mərhələsi")
    ai_recommendation: str = Field(..., description="İnvestorlar üçün qısa tövsiyə.")

# 2. Agno Agent-i başladırıq (Arqumentləri minimuma endirdik)
analyst_agent = Agent(
    model=OpenAIChat(id="gpt-4o"),
    tools=[search_startup_info],
    description="Siz startapları analiz edən Senior Vençur Analitikiisiniz.",
    instructions=[
        "Startup haqqında məlumat toplamaq üçün 'search_startup_info' alətindən istifadə edin.",
        "Məlumatlara əsasən health_score, status və ai_recommendation təyin edin.",
        "100 əla, 0 isə uğursuzluqdur."
    ],
    markdown=True
)

def analyze_startup_with_ai(startup_name: str, github_url: str) -> dict:
    """
    Süni İntellekt analizini başladan funksiya.
    """
    prompt = f"Bu startapı analiz et: Adı: {startup_name}, GitHub: {github_url}"
    
    try:
        # response_model-i məhz .run() metodunda göndəririk
        # Sənin versiyanda structured output məhz burada işləyəcək
        response = analyst_agent.run(prompt, response_model=StartupAnalysisResult)
        
        # Agno-nun qaytardığı modelə çatırıq
        analysis_data: StartupAnalysisResult = response.content
        
        return analysis_data.model_dump()
        
    except Exception as e:
        print(f"AI Analiz xətası: {e}")
        return {
            "health_score": 0,
            "status": "Risk",
            "ai_recommendation": "Analiz zamanı texniki xəta baş verdi."
        }