import os
from typing import Literal
from pydantic import BaseModel, Field
from agno.agent import Agent
from agno.models.openai import OpenAIChat
from ai_agents.tools import search_startup_info

# 1. Define the strict output schema
class StartupAnalysisResult(BaseModel):
    """Structured analysis of a startup's health and trajectory."""
    health_score: int = Field(..., description="Score from 0 to 100", ge=0, le=100)
    status: Literal["Scale", "MVP", "Risk"] = Field(..., description="Current lifecycle stage")
    ai_recommendation: str = Field(
        ..., 
        description="Max 2 sentences of actionable advice for investors or mentors."
    )

# 2. Initialize the Agno Agent
# Requires OPENAI_API_KEY in .env
analyst_agent = Agent(
    model=OpenAIChat(id="gpt-4o"),
    tools=[search_startup_info],
    description=(
        "You are a Senior Venture & Tech Analyst. Your goal is to evaluate "
        "startups based on their GitHub activity, market presence, and tech stack."
    ),
    instructions=[
        "Use the search_startup_info tool to gather context about the startup.",
        "Analyze the tech stack and developer reputation.",
        "Determine if the project is scaling, a minimum viable product (MVP), or at risk of failure.",
        "Provide a health score where 100 is excellent and 0 is critical failure.",
        "Your recommendation must be concise and targeted at high-level stakeholders."
    ],
    response_model=StartupAnalysisResult,
    structured_outputs=True,
    show_tool_calls=True
)

def analyze_startup_with_ai(startup_name: str, github_url: str) -> dict:
    """
    Wrapper function to trigger the AI analysis.
    Returns a dictionary matching the StartupAnalysisResult schema.
    """
    prompt = f"Analyze the following startup: Name: {startup_name}, GitHub: {github_url}"
    
    try:
        # Run the agent and get the structured response
        response = analyst_agent.run(prompt)
        
        # Agno returns the Pydantic model in response.content when response_model is used
        analysis_data: StartupAnalysisResult = response.content
        
        # Return as a dictionary ready for the database update
        return analysis_data.model_dump()
        
    except Exception as e:
        print(f"AI Analysis failed: {e}")
        # Return a fallback "safe" state if the AI fails
        return {
            "health_score": 0,
            "status": "Risk",
            "ai_recommendation": "Analysis failed due to an internal AI error."
        }