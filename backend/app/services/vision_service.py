"""
Vision Service

Handles medical image analysis using Gemini Vision.
"""

from app.ai.prompt_manager import PromptManager
from app.ai.gemini_client import GeminiClient
from app.ai.formatter import formatter
from app.core.logger import logger
from google.genai.errors import ServerError


class VisionService:
    """
    Business logic for medical image analysis.
    """

    def __init__(self):
        self.prompt_manager = PromptManager()
        self.gemini_client = GeminiClient()

    def analyze_image(self, image_bytes: bytes) -> str:
        """
        Analyze a medical image using Gemini Vision.
        """

        logger.info("Starting medical image analysis...")

        prompt = self.prompt_manager.build_vision_prompt()

        response = self.gemini_client.generate_vision_response(
            prompt=prompt,
            image_bytes=image_bytes
        )

        response = formatter.format_report_response(response)

        logger.info("Medical image analysis completed.")

        return response


vision_service = VisionService()