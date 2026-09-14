import json
import os
from fastapi import HTTPException

JSON_FILE = os.path.join(os.path.dirname(__file__), '..', 'data', 'favorit_cities.json')


def load():
    if os.path.exists(JSON_FILE):
        with open(JSON_FILE, 'r', encoding='utf-8') as f:
            content = f.read().strip()
            if content:
                return json.loads(content)
    return []


data_file = load()


def save():
    with open(JSON_FILE, 'w', encoding='utf-8') as f:
        json.dump(data_file, f, ensure_ascii=False)


def get_cities(explorer_name: str):
    return [city for city in data_file if city['explorerName'] == explorer_name]


def city_exsists(explorer_name: str, latitude: float, longitude: float):
    return any(
        city['explorerName'] == explorer_name and city['latitude'] == latitude and city['longitude'] == longitude
        for city in data_file
    )


def add_city(city: dict):
    if city_exsists(city['explorerName'], city['latitude'], city['longitude']):
        raise HTTPException(400, {'error': 'city is already in favorites'})
    data_file.append(city)
    save()


def remove_city(explorer_name: str, latitude: float, longitude: float):
    for i, city in enumerate(data_file):
        if city['explorerName'] == explorer_name and city['latitude'] == latitude and city['longitude'] == longitude:
            data_file.pop(i)
            save()
            return
    raise HTTPException(404, {'error': 'favorite not found'})
