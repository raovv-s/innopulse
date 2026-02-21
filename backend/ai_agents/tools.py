import os
from exa_py import Exa
from typing import Optional

# Initialize Exa client
# Ensure EXA_API_KEY is in your .env file
exa_api_key = os.getenv("EXA_API_KEY")
exa = Exa(api_key=exa_api_key) if exa_api_key else None

def search_startup_info(startup_name: str, github_url: str) -> str:
    """
    Researches a startup's recent news, technology stack, and developer 
    reputation using Exa's neural search.
    """
    if not exa:
        return "Exa API Key not configured. Skipping web research."

    # Constructing a targeted query for deep technical and market insights
    query = f"Recent news, tech stack analysis, and developer community reputation for startup '{startup_name}' with GitHub {github_url}"
    
    try:
        # Search for the top 3 most relevant technical/news results
        search_results = exa.search_and_contents(
            query,
            type="neural",
            use_autoprompt=True,
            num_results=3,
            text=True  # Retrieve full text content for the agent to read
        )
        
        # Combine the text from results into a single context string
        context = "\n\n".join([
            f"Source: {r.url}\nContent: {r.text[:2000]}" # Limit text per result
            for r in search_results.results
        ])
        
        return context if context else "No significant recent data found."
    
    except Exception as e:
        return f"Error during web research: {str(e)}"