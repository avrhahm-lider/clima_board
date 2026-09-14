import { useNavigate } from 'react-router'
import { useExplorerStore } from '../../store/useExplorerStore'

export default function LogoutButton() {
  const navigate = useNavigate()
  const logout = useExplorerStore((state) => state.logout)
  function onClick() {
    logout()
    navigate('/', { replace: true })
  }
  return (
    <button className='btn' onClick={onClick}>
      יציאה
    </button>
  )
}
