import unittest

from app.worker import build_worker_descriptor


class WorkerDescriptorTest(unittest.TestCase):
    def test_worker_descriptor_is_stable(self) -> None:
        descriptor = build_worker_descriptor()

        self.assertEqual(descriptor.name, "proposalflow-worker")
        self.assertEqual(descriptor.purpose, "phase-0 background processing shell")
