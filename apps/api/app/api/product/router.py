from fastapi import APIRouter

router = APIRouter(prefix="/api/v1", tags=["product"])


@router.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "surface": "product"}
