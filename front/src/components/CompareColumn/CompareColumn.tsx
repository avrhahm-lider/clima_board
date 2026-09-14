import type { City, CurrentWeather } from '../../types/weather'
import WeatherCard from '../WeatherCard/WeatherCard'

interface CompareColumnProps {
  city: City
  weather: CurrentWeather
}

export default function CompareColumn({ city, weather }: CompareColumnProps) {
  return <WeatherCard cityName={city.name} weather={weather} />
}
