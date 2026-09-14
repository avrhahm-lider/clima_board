import { useState } from 'react'
import type { City, CurrentWeather } from '../../../types/weather'
import { currentWeatherUrl } from '../../../services/weatherApi'
import { useFetch } from '../../../hooks/useFetch'
import CitySelector from '../../../components/CitySelector/CitySelector'
import CompareView from '../../../components/CompareView/CompareView'
import LoadingState from '../../../components/LoadingState/LoadingState'
import ErrorState from '../../../components/ErrorState/ErrorState'
import './Compare.css'

export default function Compare() {
  const [firstCity, setFirstCity] = useState<City | null>(null)
  const [secondCity, setSecondCity] = useState<City | null>(null)
  const bothSelected = Boolean(firstCity && secondCity)

  const firstState = useFetch<CurrentWeather>(
    bothSelected && firstCity ? currentWeatherUrl(firstCity.latitude, firstCity.longitude) : null,
    [firstCity, secondCity],
    'לא ניתן להשוות את הערים'
  )
  const secondState = useFetch<CurrentWeather>(
    bothSelected && secondCity ? currentWeatherUrl(secondCity.latitude, secondCity.longitude) : null,
    [firstCity, secondCity],
    'לא ניתן להשוות את הערים'
  )

  const loading = firstState.loading || secondState.loading
  const error = firstState.error || secondState.error

  return (
    <div className='compare-page'>
      <div className='compair-selectors'>
        <CitySelector
          label='עיר ראשונה'
          selected={firstCity}
          onPick={setFirstCity}
          onClear={() => setFirstCity(null)}
        />
        <CitySelector
          label='עיר שנייה'
          selected={secondCity}
          onPick={setSecondCity}
          onClear={() => setSecondCity(null)}
        />
      </div>
      {loading && <LoadingState />}
      {error && <ErrorState message={error} />}
      {firstCity && secondCity && firstState.data && secondState.data && (
        <CompareView
          first={{ city: firstCity, weather: firstState.data }}
          second={{ city: secondCity, weather: secondState.data }}
        />
      )}
    </div>
  )
}
