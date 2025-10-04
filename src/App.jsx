import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Movies from './pages/Movies'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favourite from './pages/Favourite'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

const App = () => {

  // if user is admin hide this navbar
  const isAdminRoute=useLocation().pathname.startsWith('/admin')

  return (
    <>
      <Toaster/>  {/* since we have mounted it here in app.jsx we can use it in any file */} 
      {!isAdminRoute && <Navbar/>}
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/movies' element={<Movies/>}/>
        <Route  path='/movies/:id' element={<MovieDetails/>}/>
        <Route  path='/movies/:id/:date' element={<SeatLayout/>}/>
        <Route  path='/my-bookings' element={<MyBookings/>}/>
        <Route  path='/favourite' element={<Favourite/>}/>
      </Routes>
      {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
