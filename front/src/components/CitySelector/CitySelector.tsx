import { useState } from 'react'
import type { City } from '../../types/weather'
import { searchCities } from '../../services/citiesApi'
import SearchBar from '../SearchBar/SearchBar'
import CityListItem from '../CityListItem/CityListItem'
import './CitySelector.css'

interface CitySelectorProps {
  label: string
  selected: City | null
  onPick: (city: City) => void
  onClear: () => void
}

export default function CitySelector({ label, selected, onPick, onClear }: CitySelectorProps) {
  const [results, setResults] = useState<City[]>([])

  function onSearch(query: string) {
    if (query.trim().length < 2) {
      setResults([])
      return
    }
    searchCities(query)
      .then(setResults)
      .catch(() => setResults([]))
  }

  if (selected) {
    return (
      <div className='city-selector'>
        <span className='text-muted'>{label}</span>
        <div className='card city-selector-selected'>
          <div>
            <div>{selected.name}</div>
            <div className='text-muted'>{selected.country}</div>
          </div>
          <button className='btn' onClick={onClear}>
            החלף עיר
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='city-selector'>
      <span className='text-muted'>{label}</span>
      <SearchBar onSearch={onSearch} />
      <div className='city-selector-results'>
        {results.map((city) => (
          <CityListItem key={`${city.latitude}_${city.longitude}`} city={city} onSelect={onPick} />
        ))}
      </div>
    </div>
  )
}
