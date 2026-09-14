from fastapi import HTTPException
import requests


def get_weather_ditails(lat, long):
    res = requests.get(
        'https://api.open-meteo.com/v1/forecast',
        params={
            'latitude': lat,
            'longitude': long,
            'current': 'temperature_2m,apparent_temperature,weather_code,wind_speed_10m,is_day',
        },
    )
    data = res.json()
    try:
        current = data['current']
        return {
            'temperature': current['temperature_2m'],
            'apparentTemperature': current['apparent_temperature'],
            'windSpeed': current['wind_speed_10m'],
            'weatherCode': current['weather_code'],
            'isDay': bool(current['is_day']),
        }
    except KeyError:
        raise HTTPException(400, {'error': 'weather data unavailable', 'details': data})


def get_weather_ditails_by_days(lat, long, days=5):
    res = requests.get(
        'https://api.open-meteo.com/v1/forecast',
        params={
            'latitude': lat,
            'longitude': long,
            'forecast_days': days,
            'daily': 'temperature_2m_max,temperature_2m_min,weather_code,precipitation_sum',
        },
    )
    data = res.json()
    try:
        daily = data['daily']
        result = []
        for i in range(len(daily['time'])):
            result.append({
                'date': daily['time'][i],
                'weatherCode': daily['weather_code'][i],
                'temperatureMax': daily['temperature_2m_max'][i],
                'temperatureMin': daily['temperature_2m_min'][i],
                'precipitationSum': daily['precipitation_sum'][i],
            })
        return result
    except KeyError:
        raise HTTPException(400, {'error': 'forecast data unavailable', 'details': data})


def get_comparison_from_tow_points(lat_a, long_a, lat_b, long_b):
    return {
        'first': get_weather_ditails(lat_a, long_a),
        'second': get_weather_ditails(lat_b, long_b),
    }
