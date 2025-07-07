from fastapi import APIRouter
from pydantic import BaseModel

from ..ai_utils import get_ai_response

router = APIRouter()

class AskRequest(BaseModel):
    question: str

@router.post("/ask")
async def ask_question(req: AskRequest):
    answer = get_ai_response(req.question)
    return {"answer": answer}
