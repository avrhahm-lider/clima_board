import { useState } from 'react'
import { useNavigate } from 'react-router'
import type { City } from '../../../types/weather'
import { citiesUrl } from '../../../services/citiesApi'
import { useFetch } from '../../../hooks/useFetch'
import SearchBar from '../../../components/SearchBar/SearchBar'
import CityListItem from '../../../components/CityListItem/CityListItem'
import LoadingState from '../../../components/LoadingState/LoadingState'
import ErrorState from '../../../components/ErrorState/ErrorState'
import EmptyState from '../../../components/EmptyState/EmptyState'
import './Search.css'

export default function Search() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const url = query.trim().length < 2 ? null : citiesUrl(query)
  const { data: results, loading, error } = useFetch<City[]>(url, [query], 'החיפוש נכשל')

  function onSelectCity(city: City) {
    navigate(`/app/city/${city.latitude}_${city.longitude}`, {
      state: { cityName: city.name, country: city.country },
    })
  }

  return (
    <div className='search-page'>
      <SearchBar onSearch={setQuery} autoFocus />
      {loading && <LoadingState />}
      {error && <ErrorState message={error} />}
      {!loading && !error && query.trim().length >= 2 && results?.length === 0 && (
        <EmptyState message='לא נמצאו ערים' />
      )}
      <div className='search-results'>
        {results?.map((city) => (
          <CityListItem
            key={`${city.latitude}_${city.longitude}`}
            city={city}
            onSelect={onSelectCity}
          />
        ))}
      </div>
    </div>
  )
}
