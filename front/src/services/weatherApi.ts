export function currentWeatherUrl(lat: number, lon: number) {
  return `/weather/${lat}/${lon}`
}

export function forecastUrl(lat: number, lon: number, days = 5) {
  return `/weather/days/${lat}/${lon}?days=${days}`
}
