"""
MedSaarthi AI - Configuration

Centralized application configuration using Pydantic Settings.
Loads and validates environment variables from the .env file.
"""

from functools import lru_cache

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """
    Application settings loaded from environment variables.
    """

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )

    # =========================
    # Application
    # =========================
    APP_NAME: str = Field(default="MedSaarthi AI")
    APP_VERSION: str = Field(default="1.0.0")
    DEBUG: bool = Field(default=False)

    # =========================
    # Google Gemini
    # =========================
    GOOGLE_API_KEY: str
    GEMINI_MODEL: str = Field(default="gemini-3.6-flash")

    # =========================
    # API Server
    # =========================
    HOST: str = Field(default="127.0.0.1")
    PORT: int = Field(default=8000)

    # =========================
    # CORS
    # =========================
    CORS_ORIGINS: list[str] = [
        "https://medsaarthi-ai-frontend.onrender.com",
        "http://127.0.0.1:3000",
    ]


@lru_cache
def get_settings() -> Settings:
    """
    Returns a cached Settings instance.

    This ensures environment variables are loaded only once
    during the application's lifetime.
    """
    return Settings()


settings = get_settings()