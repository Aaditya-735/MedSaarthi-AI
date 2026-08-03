from fastapi import APIRouter, UploadFile, File

from app.services.report_service import ReportService

router = APIRouter(
    prefix="/report",
    tags=["Medical Report Analysis"]
)

report_service = ReportService()


@router.post("/analyze")
async def analyze_report(file: UploadFile = File(...)):
    return await report_service.analyze(file)