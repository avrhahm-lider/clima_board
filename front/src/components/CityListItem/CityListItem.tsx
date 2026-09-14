import type { ReactNode } from 'react'
import type { City } from '../../types/weather'
import './CityListItem.css'

interface CityListItemProps {
  city: City
  onSelect: (city: City) => void
  action?: ReactNode
}

export default function CityListItem({ city, onSelect, action }: CityListItemProps) {
  return (
    <div className='card city-list-item'>
      <button className='city-list-item-main' onClick={() => onSelect(city)}>
        <span>{city.name}</span>
        <span className='text-muted'>{city.country}</span>
      </button>
      {action}
    </div>
  )
}
