"""
Chat request and response schemas for MedSaarthi AI.
"""

from pydantic import BaseModel, Field


class ChatRequest(BaseModel):
    """
    Incoming chat request from the client.
    """
    session_id: str
    message: str = Field(
        ...,
        min_length=1,
        max_length=4000,
        description="User medical question."
    )


class ChatResponse(BaseModel):
    """
    Standard chat response returned by the API.
    """

    success: bool
    message: str
    response: str