import { create } from 'zustand'

interface ExplorerState {
  explorerName: string | null
  login: (name: string) => void
  logout: () => void
}

export const useExplorerStore = create<ExplorerState>()((set) => ({
  explorerName: localStorage.getItem('userId'),
  login: (name: string) => {
    localStorage.setItem('userId', name)
    set( { explorerName: name })
  },
  logout: () => {
    localStorage.removeItem('userId')
    set({ explorerName: null })
  },
}))
