import React from 'react'
import AuthForm from './components/AuthForm'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import MyMusic from './components/MyMusic'
import Playlist from './components/Playlist'
import Help from './components/Help'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div>    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mymusic' element={<MyMusic />} />
          <Route path='/playlist' element={<Playlist />} />
          <Route path='/help' element={<Help />} /> 
          <Route path='/login' element={<AuthForm />} />
        </Routes>
      </div>
    </>
  )
}

export default App






