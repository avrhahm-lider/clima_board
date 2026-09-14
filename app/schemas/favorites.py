from pydantic import BaseModel, Field


class FavoriteCityIn(BaseModel):
    explorerName: str = Field(min_length=1, max_length=50)
    name: str = Field(min_length=1, max_length=100)
    country: str = Field(min_length=1, max_length=100)
    latitude: float = Field(ge=-90, le=90)
    longitude: float = Field(ge=-180, le=180)
