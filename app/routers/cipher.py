from fastapi import APIRouter
from pydantic import BaseModel, Field
import services.cipher as cipher_service

router = APIRouter(prefix='/cipher', tags=['Cipher'])


class AtbashRequest(BaseModel):
    text: str = Field(min_length=1)


@router.post('/atbash')
def atbash(body: AtbashRequest):
    result = cipher_service.atbash(body.text)
    return {"result": result}
