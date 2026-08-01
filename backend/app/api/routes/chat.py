from fastapi import APIRouter

from app.schemas.chat import ChatRequest, ChatResponse
from app.services.chat_service import chat_service

router = APIRouter(
    prefix="/chat",
    tags=["AI Chat"],
)


@router.post(
    "",
    response_model=ChatResponse
)
def chat(request: ChatRequest):

    ai_response = chat_service.generate_response(
        session_id=request.session_id,
        user_message=request.message
    )

    return ChatResponse(
        success=True,
        message="Response generated successfully.",
        response=ai_response
    )