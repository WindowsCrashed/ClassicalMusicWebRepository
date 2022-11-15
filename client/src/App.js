//import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './global.css'
import Navbar from './pages/main/components/navbar'
import Home from './pages/home/components/home'
import Search from './pages/search/components/search'
import Add from './pages/add/components/add'
import About from './pages/about/components/about'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>         
          <Route path='/home' element={<Home />}/>
          <Route path='/search' element={<Search />}/>
          <Route path='/add' element={<Add />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
