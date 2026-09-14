import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './Layout.css'

export default function Layout() {
  return (
    <div className='app-layout'>
      <Navbar />
      <main className='container app-main'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
