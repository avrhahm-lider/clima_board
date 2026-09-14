from fastapi import APIRouter
import services.cities as city_servise

router = APIRouter(prefix='/cities', tags=['Cities'])


@router.get('/{city}')
def get_pointes_by_name(city: str):
    return city_servise.get_pointes_by_name(city)
