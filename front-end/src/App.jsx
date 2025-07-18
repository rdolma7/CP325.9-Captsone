import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Journal from './pages/journal'
import NavBar from './components/NavBar'
import Unwind from './pages/unwind'
import Home from './pages/home'
import { Route, Routes, Navigate } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/journal' element={<Journal />}/>
      <Route path='/unwind' element={<Unwind />}/>

        {/* <NavBar />  */}
    </Routes>

    </>
  )
}

export default App
