import React from 'react'
import Navba from './components/Navba'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import { Routes, Route } from 'react-router-dom'


function App() {
  
  return (
    <>
    <Navba/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>

    </Routes>
    
    </>
  )
}

export default App