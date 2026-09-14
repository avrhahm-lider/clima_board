import { apiGet, apiPost, apiDelete } from './apiClient'
import type { FavoriteCity } from '../types/weather'

export function getFavorits(explorerName: string) {
  return apiGet<FavoriteCity[]>(`/favorites/${encodeURIComponent(explorerName)}`)
}

export function addFavorite(explorerName: string, city: FavoriteCity) {
  return apiPost<FavoriteCity>('/favorites', { explorerName, ...city })
}

export function removeFavorite(explorerName: string, latitude: number, longitude: number) {
  return apiDelete<void>(`/favorites/${encodeURIComponent(explorerName)}/${latitude}/${longitude}`)
}
