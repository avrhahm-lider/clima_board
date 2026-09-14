from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from uvicorn import run

from routers.cities import router as cities_router
from routers.weather import router as weather_router
from routers.favorites import router as favorites_router
from routers.cipher import router as cipher_router
from middleware.logging import LoggingMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:5173'],
    allow_methods=['*'],
    allow_headers=['*'],
)
app.add_middleware(LoggingMiddleware)

app.include_router(cities_router)
app.include_router(weather_router)
app.include_router(favorites_router)
app.include_router(cipher_router)


@app.get('/health')
def health():
    return {"message": "server runing"}


if __name__ == '__main__':
    run('main:app', host='127.0.0.1', port=8000, reload=True)
