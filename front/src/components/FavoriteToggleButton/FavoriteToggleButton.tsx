import { useEffect } from 'react'
import type { City } from '../../types/weather'
import { useExplorerStore } from '../../store/useExplorerStore'
import { useFavoritesStore } from '../../store/useFavoritesStore'

interface FavoriteToggleButtonProps {
  city: City
}

export default function FavoriteToggleButton({ city }: FavoriteToggleButtonProps) {
  const explorerName = useExplorerStore((state) => state.explorerName)
  const favorites = useFavoritesStore((state) => state.favorites)
  const loading = useFavoritesStore((state) => state.loading)
  const load = useFavoritesStore((state) => state.load)
  const add = useFavoritesStore((state) => state.add)
  const remove = useFavoritesStore((state) => state.remove)

  useEffect(() => {
    if (explorerName) load(explorerName)
  }, [explorerName, load])

  const isFavorite = favorites.some(
    (f) => f.latitude === city.latitude && f.longitude === city.longitude
  )

  function onToggle() {
    if (!explorerName) return
    if (isFavorite) {
      remove(explorerName, city.latitude, city.longitude)
    } else {
      add(explorerName, city)
    }
  }

  return (
    <button className='btn' onClick={onToggle} disabled={loading}>
      {isFavorite ? 'הסר ממועדפים' : 'הוסף למועדפים'}
    </button>
  )
}
