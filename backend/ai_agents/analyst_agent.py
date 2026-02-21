import os
from typing import Literal
from pydantic import BaseModel, Field
from agno.agent import Agent
from agno.models.openai import OpenAIChat
from ai_agents.tools import search_startup_info

# 1. Çıxış sxemini təyin edirik
class StartupAnalysisResult(BaseModel):
    """Startapın sağlamlığı və trayektoriyasının strukturlaşdırılmış analizi."""
    health_score: int = Field(..., description="0-dan 100-ə qədər bal", ge=0, le=100)
    status: Literal["Scale", "MVP", "Risk"] = Field(..., description="Hazırkı həyat dövrü mərhələsi")
    ai_recommendation: str = Field(
        ..., 
        description="İnvestorlar üçün maksimum 2 cümləlik tövsiyə."
    )

# 2. Agno Agent-i başladırıq (response_model-i buradan çıxardıq)
analyst_agent = Agent(
    model=OpenAIChat(id="gpt-4o"),
    tools=[search_startup_info],
    description=(
        "Siz Baş Vençur və Texnologiya Analitikiisiniz. Məqsədiniz startapları "
        "onların GitHub fəaliyyəti, bazar mövcudluğu və texnologiya yığını əsasında qiymətləndirməkdir."
    ),
    instructions=[
        "Startap haqqında məlumat toplamaq üçün search_startup_info alətindən istifadə edin.",
        "Texnologiya yığınını və tərtibatçı reputasiyasını təhlil edin.",
        "Layihənin genişləndiyini (Scale), MVP mərhələsində olduğunu və ya uğursuzluq riski (Risk) daşıdığını müəyyən edin.",
        "100 əla, 0 isə kritik uğursuzluq olan sağlamlıq balı (health score) verin.",
        "Tövsiyəniz qısa və konkret olmalıdır."
    ],
    markdown=True,
    show_tool_calls=True
)

def analyze_startup_with_ai(startup_name: str, github_url: str) -> dict:
    """
    Süni İntellekt analizini başladan funksiya.
    """
    prompt = f"Aşağıdakı startapı analiz et: Adı: {startup_name}, GitHub: {github_url}"
    
    try:
        # response_model-i məhz burada, .run() metodunda göndəririk
        response = analyst_agent.run(prompt, response_model=StartupAnalysisResult)
        
        # Agno cavabı Pydantic modeli kimi qaytarır (response.content)
        analysis_data: StartupAnalysisResult = response.content
        
        return analysis_data.model_dump()
        
    except Exception as e:
        print(f"Süni İntellekt Analizi uğursuz oldu: {e}")
        return {
            "health_score": 0,
            "status": "Risk",
            "ai_recommendation": "Daxili xəta səbəbindən analiz aparıla bilmədi."
        }