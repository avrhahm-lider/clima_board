import { useEffect, useRef } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
  autoFocus?: boolean
}

export default function SearchBar({ onSearch, placeholder, autoFocus }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus()
    }
  }, [autoFocus])

  return (
    <input
      ref={inputRef}
      className='input'
      type='text'
      placeholder={placeholder ?? 'חפש עיר'}
      onChange={(e) => onSearch(e.target.value)}
    />
  )
}
