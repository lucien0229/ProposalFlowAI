from __future__ import annotations

from . import FastAPI, Response, find_route


class TestClient:
    def __init__(self, app: FastAPI) -> None:
        self._app = app

    def get(self, path: str) -> Response:
        route = find_route(self._app.routes, "GET", path)
        if route is None:
            return Response(status_code=404, _payload={"detail": "Not Found"})

        return Response(status_code=200, _payload=route.handler())
