from fastapi import APIRouter

from app.schemas.search import SearchRequest, SearchResponse
from app.services.search_service import SearchService

router = APIRouter()

search_service = SearchService()


@router.post(
    "/search",
    response_model=SearchResponse,
    tags=["Medical Search"]
)
def medical_search(request: SearchRequest):

    response = search_service.search(request.query)

    return SearchResponse(
        success=True,
        response=response
    )