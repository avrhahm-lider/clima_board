import { apiGet } from './apiClient'
import type { City } from '../types/weather'

export function citiesUrl(query: string) {
  return `/cities/${encodeURIComponent(query)}`
}

export function searchCities(query: string) {
  return apiGet<City[]>(citiesUrl(query))
}
