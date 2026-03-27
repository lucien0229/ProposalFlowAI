from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any, Callable, Iterable


@dataclass(frozen=True)
class Route:
    method: str
    path: str
    handler: Callable[[], Any]
    tags: tuple[str, ...] = ()


@dataclass
class APIRouter:
    prefix: str = ""
    tags: list[str] = field(default_factory=list)
    routes: list[Route] = field(default_factory=list)

    def get(self, path: str, *_args: Any, **_kwargs: Any) -> Callable[[Callable[[], Any]], Callable[[], Any]]:
        return self._register("GET", path)

    def _register(self, method: str, path: str) -> Callable[[Callable[[], Any]], Callable[[], Any]]:
        def decorator(handler: Callable[[], Any]) -> Callable[[], Any]:
            self.routes.append(
                Route(method=method, path=self._normalize(path), handler=handler, tags=tuple(self.tags))
            )
            return handler

        return decorator

    def _normalize(self, path: str) -> str:
        return path if path.startswith("/") else f"/{path}"


class FastAPI(APIRouter):
    def __init__(self, title: str = "", version: str = "", description: str = "") -> None:
        super().__init__()
        self.title = title
        self.version = version
        self.description = description

    def include_router(self, router: APIRouter) -> None:
        self.routes.extend(
            Route(
                method=route.method,
                path=self._compose(router.prefix, route.path),
                handler=route.handler,
                tags=route.tags,
            )
            for route in router.routes
        )

    def _compose(self, router_prefix: str, route_path: str) -> str:
        prefix = router_prefix.rstrip("/")
        suffix = route_path if route_path.startswith("/") else f"/{route_path}"
        return f"{prefix}{suffix}" if prefix else suffix


@dataclass(frozen=True)
class Response:
    status_code: int
    _payload: Any

    def json(self) -> Any:
        return self._payload


def find_route(routes: Iterable[Route], method: str, path: str) -> Route | None:
    for route in routes:
        if route.method == method and route.path == path:
            return route
    return None
