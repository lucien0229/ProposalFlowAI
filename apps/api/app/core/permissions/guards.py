from collections.abc import Callable
from typing import Literal

from app.core.auth.session import SessionContext

WorkspaceRole = Literal["owner", "member"]
InternalRole = Literal["internal_admin", "internal_analyst"]


def require_workspace_role(*allowed_roles: WorkspaceRole) -> Callable[[SessionContext], SessionContext]:
    """Phase-0 placeholder for workspace-role authorization."""

    def dependency(session: SessionContext) -> SessionContext:
        raise NotImplementedError(
            f"Workspace role guard placeholder for roles: {', '.join(allowed_roles)}"
        )

    return dependency


def require_internal_role(*allowed_roles: InternalRole) -> Callable[[SessionContext], SessionContext]:
    """Phase-0 placeholder for internal-role authorization."""

    def dependency(session: SessionContext) -> SessionContext:
        raise NotImplementedError(
            f"Internal role guard placeholder for roles: {', '.join(allowed_roles)}"
        )

    return dependency
