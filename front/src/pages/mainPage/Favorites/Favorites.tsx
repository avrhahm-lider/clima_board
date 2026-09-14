import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import type { FavoriteCity } from '../../../types/weather'
import { useExplorerStore } from '../../../store/useExplorerStore'
import { useFavoritesStore } from '../../../store/useFavoritesStore'
import CityListItem from '../../../components/CityListItem/CityListItem'
import LoadingState from '../../../components/LoadingState/LoadingState'
import ErrorState from '../../../components/ErrorState/ErrorState'
import EmptyState from '../../../components/EmptyState/EmptyState'
import './Favorites.css'

export default function Favorites() {
  const explorerName = useExplorerStore((state) => state.explorerName)
  const favorites = useFavoritesStore((state) => state.favorites)
  const loading = useFavoritesStore((state) => state.loading)
  const error = useFavoritesStore((state) => state.error)
  const load = useFavoritesStore((state) => state.load)
  const remove = useFavoritesStore((state) => state.remove)
  const navigate = useNavigate()

  useEffect(() => {
    if (explorerName) load(explorerName)
  }, [explorerName, load])

  function onSelect(city: FavoriteCity) {
    navigate(`/app/city/${city.latitude}_${city.longitude}`, {
      state: { cityName: city.name, country: city.country },
    })
  }

  function onRemove(city: FavoriteCity) {
    if (!explorerName) return
    remove(explorerName, city.latitude, city.longitude)
  }

  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} />
  if (favorites.length === 0) return <EmptyState message='אין ערים מועדפות' />

  return (
    <div className='favorites-list'>
      {favorites.map((city) => (
        <CityListItem
          key={`${city.latitude}_${city.longitude}`}
          city={city}
          onSelect={onSelect}
          action={
            <button className='btn' onClick={() => onRemove(city)}>
              הסר
            </button>
          }
        />
      ))}
    </div>
  )
}
