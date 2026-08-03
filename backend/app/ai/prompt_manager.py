"""
Prompt Manager

Centralized prompt loader for MedSaarthi AI.

Responsibilities:
- Return the appropriate prompt template.
- Keep AI modules independent.
- Make it easy to add new prompt types later.
"""

from app.ai.prompts.chat_prompt import CHAT_PROMPT_TEMPLATE
from app.ai.prompts.report_prompt import REPORT_PROMPT_TEMPLATE
from app.ai.prompts.vision_prompt import VISION_PROMPT_TEMPLATE
from app.ai.prompts.search_prompt import SEARCH_PROMPT_TEMPLATE
from app.ai.prompts.followup_prompt import FOLLOWUP_PROMPT_TEMPLATE


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

    def build_report_prompt(self, report_text: str):

        return REPORT_PROMPT_TEMPLATE.format(
            report_text=report_text
        )

    def build_vision_prompt(self):
        return VISION_PROMPT_TEMPLATE

    def build_search_prompt(self, query: str) -> str:
        return f"""
    {SEARCH_PROMPT_TEMPLATE}

    =========================================
    SEARCH QUERY
    =========================================

    {query}

    =========================================
    """

    def build_followup_prompt(
        self,
        user_message: str,
        conversation_history: str
    ) -> str:
    
        return f"""
    {FOLLOWUP_PROMPT_TEMPLATE}
    
    =====================================
    PREVIOUS CONVERSATION
    =====================================
    
    {conversation_history}
    
    =====================================
    FOLLOW-UP QUESTION
    =====================================
    
    {user_message}
    """