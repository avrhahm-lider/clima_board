import { useEffect, useState } from 'react'
import { apiGet } from '../services/apiClient'

interface FetchState<T> {
  data: T | null
  loading: boolean
  error: string
}

function depsChaged(a: unknown[], b: unknown[]) {
  if (a.length !== b.length) return true
  return a.some((value, index) => !Object.is(value, b[index]))
}

export function useFetch<T>(url: string | null, deps: unknown[], errorMessage: string) {
  const [state, setState] = useState<FetchState<T>>({ data: null, loading: url !== null, error: '' })
  const [prevDeps, setPrevDeps] = useState(deps)

  if (depsChaged(prevDeps, deps)) {
    setPrevDeps(deps)
    setState({ data: null, loading: url !== null, error: '' })
  }

  useEffect(() => {
    if (url === null) return
    let cancelled = false
    apiGet<T>(url)
      .then((data) => {
        if (!cancelled) setState({ data, loading: false, error: '' })
      })
      .catch(() => {
        if (!cancelled) setState({ data: null, loading: false, error: errorMessage })
      })
    return () => {
      cancelled = true
    }
  }, deps)

  return state
}
