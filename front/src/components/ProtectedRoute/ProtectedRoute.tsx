import { Navigate, Outlet } from 'react-router'
import { useExplorerStore } from '../../store/useExplorerStore'

export default function ProtectedRoute() {
  const explorerName = useExplorerStore((s) => s.explorerName)
  if (!explorerName) {
    return <Navigate to='/' replace />
  }
  return <Outlet />
}
