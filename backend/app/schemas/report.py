from pydantic import BaseModel


class ReportResponse(BaseModel):
    success: bool
    summary: str
    abnormal_values: list
    recommendations: list
    urgency: str