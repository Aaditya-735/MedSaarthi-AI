"""
MedSaarthi AI
Gemini Client

Handles all communication with Google Gemini.
"""

from google import genai
from google.genai.errors import ClientError

from app.core.config import settings
from app.core.logger import logger


class GeminiClient:
    """
    Singleton Gemini client used across the application.
    """

    def __init__(self):
        logger.info("Initializing Gemini Client...")

        self.client = genai.Client(
            api_key=settings.GOOGLE_API_KEY
        )

        self.model = settings.GEMINI_MODEL

        logger.success(f"Gemini initialized with model: {self.model}")

    def generate_response(self, prompt: str) -> str:
        """
        Generate a text response using Gemini.
        """

        try:

            response = self.client.models.generate_content(
                model=self.model,
                contents=prompt,
            )

            return response.text

        except ClientError as e:

            logger.error(f"Gemini API Error: {e}")

            raise Exception("Unable to generate AI response.")

        except Exception as e:

            logger.exception(e)

            raise Exception("Unexpected AI error.")


gemini_client = GeminiClient()