import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes, json } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Create from './pages/create/Create'

function App() {
  const [data, setData]= useState(
    JSON.parse(localStorage.getItem("menu")) ? JSON.parse(localStorage.getItem("menu")) : []
  )

  


    const [dark, setDark]= useState(false)
   
  return (
    <>
     <BrowserRouter>
         <Navbar  setData={setData} dark={dark}  setDark={setDark} />
            <Routes>
            <Route  path='/' element={<Home data={data}  setData={setData} dark={dark} setDark={setDark} />}/>
              <Route path='/about/:id' element={<About  data={data}  dark={dark}  setDark={setDark} />} />
              <Route  path='/create' element={ <Create  setData={setData} data={data}    dark={dark}   setDark={setDark} />} />
            </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
