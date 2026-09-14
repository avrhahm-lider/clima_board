export interface City {
  name: string
  country: string
  admin1?: string
  latitude: number
  longitude: number
}

export interface CurrentWeather {
  temperature: number
  apparentTemperature: number
  windSpeed: number
  weatherCode: number
  isDay: boolean
}

export interface ForecastDay {
  date: string
  weatherCode: number
  temperatureMax: number
  temperatureMin: number
  precipitationSum: number
}

export type FavoriteCity = City
