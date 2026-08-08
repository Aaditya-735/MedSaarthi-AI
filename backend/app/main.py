from fastapi import FastAPI

from app.core.config import settings
from app.core.logger import logger
from app.api.routes.chat import router as chat_router
from app.api.routes import report
from app.api.routes.search import router as search_router
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes.emergency import router as emergency_router

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    debug=settings.DEBUG,
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://medsaarthi-ai-frontend.onrender.com",
         "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat_router)
app.include_router(report.router)
app.include_router(search_router)
app.include_router(emergency_router)


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