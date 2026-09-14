import type { CurrentWeather } from '../../types/weather'
import './WeatherCard.css'

interface WeatherCardProps {
  cityName: string
  weather: CurrentWeather
}

export default function WeatherCard({ cityName, weather }: WeatherCardProps) {
  return (
    <div className='card weather-card'>
      <h2>{cityName}</h2>
      <p className='weather-card-temp'>{Math.round(weather.temperature)}°</p>
      <p className='text-muted'>מרגיש כמו {Math.round(weather.apparentTemperature)}°</p>
      <p className='text-muted'>רוח {weather.windSpeed} קמ"ש</p>
    </div>
  )
}
