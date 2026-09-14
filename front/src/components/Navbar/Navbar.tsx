import { NavLink } from 'react-router'
import LogoutButton from '../LogoutButton/LogoutButton'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-links'>
        <NavLink to='/app'>לוח בקרה</NavLink>
        <NavLink to='/app/search'>חיפוש</NavLink>
        <NavLink to='/app/favorites'>מועדפים</NavLink>
        <NavLink to='/app/compare'>השוואה</NavLink>
      </div>
      <LogoutButton />
    </nav>
  )
}
