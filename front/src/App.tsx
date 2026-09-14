import './App.css'
import { Route, Routes } from 'react-router'
import Welcome from './pages/Welcome/Welcome'
import NotFound from './pages/NotFound/NotFound'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Layout from './Layout/Layout'
import Dashboard from './pages/mainPage/Dashboard/Dashboard'
import Search from './pages/mainPage/Search/Search'
import CityDetails from './pages/mainPage/CityDetails/CityDetails'
import Favorites from './pages/mainPage/Favorites/Favorites'
import Compare from './pages/mainPage/Compare/Compare'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/app' element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='search' element={<Search />} />
          <Route path='city/:cityId' element={<CityDetails />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='compare' element={<Compare />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
