import type { ForecastDay } from '../../types/weather'
import ForecastDayCard from '../ForecastDayCard/ForecastDayCard'
import './ForecastList.css'

interface ForecastListProps {
  days: ForecastDay[]
}

export default function ForecastList({ days }: ForecastListProps) {
  return (
    <div className='forecast-list'>
      {days.map((day) => (
        <ForecastDayCard key={day.date} day={day} />
      ))}
    </div>
  )
}
