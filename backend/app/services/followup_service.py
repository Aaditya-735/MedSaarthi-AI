from app.ai.prompt_manager import PromptManager
from app.ai.gemini_client import GeminiClient
from app.ai.conversation import conversation_manager


class FollowupService:

    def __init__(self):
        self.prompt_manager = PromptManager()
        self.gemini_client = GeminiClient()

    def generate_followup(
        self,
        session_id: str,
        user_message: str
    ):

        history = conversation_manager.get_context(session_id)

        prompt = self.prompt_manager.build_followup_prompt(
            user_message=user_message,
            conversation_history=history
        )

        return self.gemini_client.generate_response(prompt)