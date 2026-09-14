import { create } from 'zustand'
import type { FavoriteCity } from '../types/weather'
import { addFavorite, getFavorits, removeFavorite } from '../services/favoritesApi'

interface FavoritesState {
  favorites: FavoriteCity[]
  loading: boolean
  error: string
  load: (explorerName: string) => void
  add: (explorerName: string, city: FavoriteCity) => Promise<void>
  remove: (explorerName: string, latitude: number, longitude: number) => Promise<void>
}

export const useFavoritesStore = create<FavoritesState>()((set, get) => ({
  favorites: [],
  loading: false,
  error: '',
  load: (explorerName: string) => {
    set({ loading: true, error: '' })
    getFavorits(explorerName)
      .then((favorites) => set({ favorites }))
      .catch(() => set({ error: 'לא ניתן לטעון מועדפים' }))
      .finally(() => set({ loading: false }))
  },
  add: (explorerName: string, city: FavoriteCity) => {
    return addFavorite(explorerName, city).then(() => {
      set((s) => ({ favorites: [...s.favorites, city] }))
    })
  },
  remove: (explorerName: string, latitude: number, longitude: number) => {
    return removeFavorite(explorerName, latitude, longitude).then(() => {
      set({
        favorites: get().favorites.filter(
          (val) => val.latitude !== latitude || val.longitude !== longitude
        ),
      })
    })
  },
}))
