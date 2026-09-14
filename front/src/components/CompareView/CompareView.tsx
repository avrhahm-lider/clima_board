import type { City, CurrentWeather } from '../../types/weather'
import CompareColumn from '../CompareColumn/CompareColumn'
import './CompareView.css'

interface CompareViewProps {
  first: { city: City; weather: CurrentWeather }
  second: { city: City; weather: CurrentWeather }
}

export default function CompareView({ first, second }: CompareViewProps) {
  return (
    <div className='compare-view'>
      <CompareColumn city={first.city} weather={first.weather} />
      <CompareColumn city={second.city} weather={second.weather} />
    </div>
  )
}
