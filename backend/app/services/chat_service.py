"""
MedSaarthi AI
Chat Service

Coordinates prompt creation and AI response generation.
"""

from app.ai.prompt_manager import PromptManager
from app.ai.gemini_client import GeminiClient
from app.core.logger import logger
from app.ai.formatter import formatter
from app.ai.safety import safety_manager
from app.ai.conversation import conversation_manager
from app.services.followup_service import FollowupService
from app.ai.profile import profile_manager
from app.ai.report_memory import report_memory


class ChatService:
    """
    Main business logic for AI chat.
    """

    def __init__(self):
        self.prompt_manager = PromptManager()
        self.gemini_client = GeminiClient()
        self.followup_service = FollowupService()

    def generate_response(self,session_id: str, user_message: str) -> str:
        """
        Generate an AI response for the user's message.
        """

        logger.info("Generating AI response...")
        conversation_manager.add_message(
            session_id,
            "User",
            user_message
        )

        profile_manager.update(
            session_id,
            user_message
        )

        history = conversation_manager.get_context(session_id)
        profile = profile_manager.get_profile(session_id)
        last_report = report_memory.get(session_id)

        # First user message
        if history.count("User:") <= 1:
        
            prompt = self.prompt_manager.build_chat_prompt(
                user_message=user_message,
                conversation_history=history,
                user_profile=profile,
                last_report=last_report
            )

            if safety_manager.is_high_risk(user_message):
                prompt += """
        This may be a medical emergency.
        Strongly advise the user to seek immediate emergency medical care.
        Do not diagnose with certainty.
        """

            response = self.gemini_client.generate_response(prompt)

        # Follow-up message
        else:
            response = self.followup_service.generate_followup(
                session_id=session_id,
                user_message=user_message
            )

        

        if safety_manager.is_high_risk(user_message):
            prompt += """

        This may be a medical emergency.
        Strongly advise the user to seek immediate emergency medical care.
        Do not diagnose with certainty.
        """

        
        formatted_response = formatter.format_chat_response(response)
        conversation_manager.add_message(
            session_id,
            "Assistant",
            formatted_response
        )

        logger.info("AI response generated successfully.")

        return response


# Global instance
chat_service = ChatService()