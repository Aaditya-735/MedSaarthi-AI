from app.ai.gemini_client import GeminiClient
from app.ai.prompts.emergency_prompt import EMERGENCY_PROMPT
from app.ai.safety import safety_manager


class EmergencyService:

    def __init__(self):
        self.gemini_client = GeminiClient()

    def analyze(self, symptoms: str) -> dict:

        high_risk = safety_manager.is_high_risk(symptoms)

        prompt = EMERGENCY_PROMPT.format(
            symptoms=symptoms
        )

        response = self.gemini_client.generate_response(prompt)

        return {
            "success": True,
            "high_risk": high_risk,
            "response": response
        }


emergency_service = EmergencyService()