from fastapi import APIRouter
import services.crud_favorits as favorites_servise
from schemas.favorites import FavoriteCityIn

router = APIRouter(prefix='/favorites', tags=['Favorites'])


@router.get('/{explorerName}')
def get_favorites(explorerName: str):
    return favorites_servise.get_cities(explorerName)


@router.post('/')
def add_favorite(city: FavoriteCityIn):
    favorites_servise.add_city(city.model_dump())
    return city


@router.delete('/{explorerName}/{latitude}/{longitude}')
def remove_favorite(explorerName: str, latitude: float, longitude: float):
    favorites_servise.remove_city(explorerName, latitude, longitude)
    return {"message": "removed"}
