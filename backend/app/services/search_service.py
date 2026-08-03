from app.ai.prompt_manager import PromptManager
from app.ai.gemini_client import GeminiClient


class SearchService:

    def __init__(self):
        self.prompt_manager = PromptManager()
        self.gemini_client = GeminiClient()

    def search(self, query: str):

        prompt = self.prompt_manager.build_search_prompt(query)

        response = self.gemini_client.generate_response(prompt)

        return response