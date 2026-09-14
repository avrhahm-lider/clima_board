import { Link } from 'react-router'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <p>העמוד לא נמצא</p>
      <Link className='btn' to='/'>
        חזרה לדף הבית
      </Link>
    </div>
  )
}
