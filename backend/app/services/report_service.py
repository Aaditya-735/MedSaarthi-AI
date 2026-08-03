from fastapi import UploadFile, HTTPException

from app.services.ocr_service import OCRService
from app.services.vision_service import VisionService
from app.ai.prompt_manager import PromptManager
from app.ai.gemini_client import GeminiClient
from app.ai.formatter import formatter
from app.ai.report_memory import report_memory


class ReportService:

    def __init__(self):
        self.ocr_service = OCRService()
        self.vision_service = VisionService()
        self.prompt_manager = PromptManager()
        self.gemini_client = GeminiClient()

    async def analyze(self,session_id: str, file: UploadFile):

        if not file.filename:
            raise HTTPException(
                status_code=400,
                detail="No file uploaded."
            )

        extension = file.filename.split(".")[-1].lower()

        allowed = ["pdf", "png", "jpg", "jpeg"]

        if extension not in allowed:
            raise HTTPException(
                status_code=400,
                detail="Unsupported file type."
            )

        file_bytes = await file.read()

        # ---------- Images ----------
        if extension in ["png", "jpg", "jpeg"]:

            analysis = self.vision_service.analyze_image(file_bytes)

            return {
                "success": True,
                "filename": file.filename,
                "analysis": analysis
            }

        # ---------- PDF ----------
        extracted_text = await self.ocr_service.extract_text(
            file_bytes=file_bytes,
            extension=extension
        )
        
        prompt = self.prompt_manager.build_report_prompt(
            report_text=extracted_text
        )
        
        analysis = self.gemini_client.generate_response(prompt)
        report_memory.save(
            session_id,
            analysis
        )
        
        analysis = formatter.format_report_response(analysis)
        
        return {
            "success": True,
            "filename": file.filename,
            "analysis": analysis
        }