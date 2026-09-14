import { useFetch } from '../../../hooks/useFetch'
import { currentWeatherUrl } from '../../../services/weatherApi'
import type { CurrentWeather } from '../../../types/weather'
import WeatherCard from '../../../components/WeatherCard/WeatherCard'
import LoadingState from '../../../components/LoadingState/LoadingState'
import ErrorState from '../../../components/ErrorState/ErrorState'
import Greeting from '../../../components/Greeting/Greeting'
import QuickLinks from '../../../components/QuickLinks/QuickLinks'
import './Dashboard.css'

const DEFAULT_CITY = { name: 'תל אביב', latitude: 32.0853, longitude: 34.7818 }

export default function Dashboard() {
  const { data: weather, loading, error } = useFetch<CurrentWeather>(
    currentWeatherUrl(DEFAULT_CITY.latitude, DEFAULT_CITY.longitude),
    [],
    'לא ניתן לטעון את מזג האוויר'
  )

  return (
    <div className='dashboard'>
      <Greeting />
      {loading && <LoadingState />}
      {error && <ErrorState message={error} />}
      {weather && <WeatherCard cityName={DEFAULT_CITY.name} weather={weather} />}
      <QuickLinks />
    </div>
  )
}
