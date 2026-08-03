from fastapi import APIRouter, UploadFile, File, Form

from app.services.report_service import ReportService

router = APIRouter(
    prefix="/report",
    tags=["Medical Report Analysis"]
)

report_service = ReportService()


@router.post("/analyze")
async def analyze_report(
    session_id: str = Form(...),
    file: UploadFile = File(...)
):
    return await report_service.analyze(
        session_id=session_id,
        file=file
    )