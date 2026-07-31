from fastapi import FastAPI

from app.core.config import settings
from app.core.logger import logger

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    debug=settings.DEBUG,
)


@app.get("/")
def root():
    return {
        "application": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "status": "running",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
        "application": settings.APP_NAME,
    }


logger.info("MedSaarthi AI Backend Initialized")