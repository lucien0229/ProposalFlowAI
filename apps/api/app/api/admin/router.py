from fastapi import APIRouter

router = APIRouter(prefix="/api/v1/admin", tags=["admin"])


@router.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "surface": "admin"}
