from fastapi import APIRouter
from pydantic import BaseModel

from app.services.emergency_service import emergency_service


router = APIRouter(
    prefix="/emergency",
    tags=["Emergency Guidance"]
)


class EmergencyRequest(BaseModel):
    symptoms: str


@router.post("")
def emergency_check(request: EmergencyRequest):

    return emergency_service.analyze(
        request.symptoms
    )