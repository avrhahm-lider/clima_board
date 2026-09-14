from fastapi import APIRouter
import services.weather as weather_servise

router = APIRouter(prefix='/weather', tags=['Weather'])


@router.get('/{lat}/{long}')
def get_weather_ditails(lat: float, long: float):
    return weather_servise.get_weather_ditails(lat, long)


@router.get('/days/{lat}/{long}')
def get_weather_ditails_by_days(lat: float, long: float, days: int = 5):
    return weather_servise.get_weather_ditails_by_days(lat, long, days)


@router.get('/compare/{lat_a}/{long_a}/to/{lat_b}/{long_b}')
def get_comparison_from_tow_points(lat_a: float, long_a: float, lat_b: float, long_b: float):
    return weather_servise.get_comparison_from_tow_points(lat_a, long_a, lat_b, long_b)
