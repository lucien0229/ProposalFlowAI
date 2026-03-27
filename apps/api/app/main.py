from fastapi import FastAPI

from app.api.admin.router import router as admin_router
from app.api.product.router import router as product_router

app = FastAPI(
    title="ProposalFlow API",
    version="0.1.0",
    description="Phase-0 backend shell for ProposalFlow AI."
)

app.include_router(product_router)
app.include_router(admin_router)


@app.get("/health", tags=["system"])
def root_health() -> dict[str, str]:
    return {"status": "ok", "service": "proposalflow-api"}


def main() -> None:
    print("proposalflow-api: ready")
    print("available routes:")
    for route in app.routes:
        print(f"- {route.method} {route.path}")


if __name__ == "__main__":
    main()
