import { useLocation, useParams } from 'react-router'
import { useFetch } from '../../../hooks/useFetch'
import { currentWeatherUrl, forecastUrl } from '../../../services/weatherApi'
import type { CurrentWeather, ForecastDay } from '../../../types/weather'
import WeatherCard from '../../../components/WeatherCard/WeatherCard'
import ForecastList from '../../../components/ForecastList/ForecastList'
import LoadingState from '../../../components/LoadingState/LoadingState'
import ErrorState from '../../../components/ErrorState/ErrorState'
import FavoriteToggleButton from '../../../components/FavoriteToggleButton/FavoriteToggleButton'
import './CityDetails.css'

export default function CityDetails() {
  const { cityId } = useParams()
  const location = useLocation()
  const state = location.state as { cityName?: string; country?: string } | null
  const [lat, lon] = (cityId ?? '').split('_').map(Number)
  const cityName = state?.cityName ?? cityId ?? ''
  const validCoords = !Number.isNaN(lat) && !Number.isNaN(lon)

  const weatherState = useFetch<CurrentWeather>(
    validCoords ? currentWeatherUrl(lat, lon) : null,
    [lat, lon],
    'לא נמצאו נתונים עבור העיר'
  )
  const forecastState = useFetch<ForecastDay[]>(
    validCoords ? forecastUrl(lat, lon) : null,
    [lat, lon],
    'לא נמצאו נתונים עבור העיר'
  )

  const loading = weatherState.loading || forecastState.loading
  const error = weatherState.error || forecastState.error || (!validCoords ? 'לא נמצאו נתונים עבור העיר' : '')

  if (loading) return <LoadingState />
  if (error || !weatherState.data || !forecastState.data) {
    return <ErrorState message={error || 'לא נמצאו נתונים עבור העיר'} />
  }

  return (
    <div className='city-details'>
      <WeatherCard cityName={cityName} weather={weatherState.data} />
      <FavoriteToggleButton
        city={{ name: cityName, country: state?.country ?? '', latitude: lat, longitude: lon }}
      />
      <ForecastList days={forecastState.data} />
    </div>
  )
}
