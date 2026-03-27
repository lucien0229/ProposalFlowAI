from dataclasses import dataclass
from typing import Literal, Optional

SessionType = Literal["web", "admin"]


@dataclass(frozen=True)
class SessionContext:
    user_id: str
    session_type: SessionType
    workspace_id: Optional[str] = None
    role: Optional[str] = None


def get_workspace_session() -> SessionContext:
    raise NotImplementedError("Workspace session resolution is a phase-0 placeholder.")


def get_internal_session() -> SessionContext:
    raise NotImplementedError("Internal admin session resolution is a phase-0 placeholder.")
