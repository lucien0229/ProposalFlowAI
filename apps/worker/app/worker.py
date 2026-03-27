from dataclasses import dataclass


@dataclass(frozen=True)
class WorkerDescriptor:
    name: str
    purpose: str


def build_worker_descriptor() -> WorkerDescriptor:
    return WorkerDescriptor(
        name="proposalflow-worker",
        purpose="phase-0 background processing shell"
    )


def main() -> None:
    descriptor = build_worker_descriptor()
    print(f"{descriptor.name}: {descriptor.purpose}")
