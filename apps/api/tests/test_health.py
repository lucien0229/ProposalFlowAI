import unittest

from fastapi.testclient import TestClient

from app.main import app


class HealthRouteTest(unittest.TestCase):
    def test_product_and_admin_health_routes_are_available(self) -> None:
        client = TestClient(app)

        product_response = client.get("/api/v1/health")
        admin_response = client.get("/api/v1/admin/health")

        self.assertEqual(product_response.status_code, 200)
        self.assertEqual(product_response.json(), {"status": "ok", "surface": "product"})
        self.assertEqual(admin_response.status_code, 200)
        self.assertEqual(admin_response.json(), {"status": "ok", "surface": "admin"})
