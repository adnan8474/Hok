import os
from fastapi import APIRouter

router = APIRouter()
UPLOAD_DIR = os.path.join(os.path.dirname(__file__), "..", "uploads")

@router.get("/docs")
async def list_docs():
    files = [f for f in os.listdir(UPLOAD_DIR) if not f.startswith('.')]
    return {"files": files}
