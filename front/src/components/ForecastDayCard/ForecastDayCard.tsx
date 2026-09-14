import type { ForecastDay } from '../../types/weather'
import './ForecastDayCard.css'

interface ForecastDayCardProps {
  day: ForecastDay
}

export default function ForecastDayCard({ day }: ForecastDayCardProps) {
  return (
    <div className='card forecast-day-card'>
      <p>{day.date}</p>
      <p>{Math.round(day.temperatureMax)}° / {Math.round(day.temperatureMin)}°</p>
      <p className='text-muted'>{day.precipitationSum} מ"מ גשם</p>
    </div>
  )
}
