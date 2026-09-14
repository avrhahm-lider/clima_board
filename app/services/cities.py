import requests


def get_pointes_by_name(city: str):
    res = requests.get(
        'https://geocoding-api.open-meteo.com/v1/search',
        params={'name': city, 'count': 10, 'language': 'he', 'format': 'json'},
        
    )
    data = res.json()
    results = data.get('results') or []
    return [
        {
            'name': item.get('name'),
            'country': item.get('country'),
            'admin1': item.get('admin1'),
            'latitude': item.get('latitude'),
            'longitude': item.get('longitude'),
        }
        for item in results
    ]
