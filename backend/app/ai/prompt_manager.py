"""
Prompt Manager

Centralized prompt loader for MedSaarthi AI.

Responsibilities:
- Return the appropriate prompt template.
- Keep AI modules independent.
- Make it easy to add new prompt types later.
"""

from app.ai.prompts.chat_prompt import CHAT_PROMPT_TEMPLATE


class PromptManager:

    def __init__(self):
        pass

    def build_chat_prompt(
        self,
        user_message: str,
        conversation_history: str = ""
    ) -> str:
        """
        Build prompt for normal health conversation.
        """

        return CHAT_PROMPT_TEMPLATE.format(
            conversation_history=conversation_history,
            user_message=user_message
        )