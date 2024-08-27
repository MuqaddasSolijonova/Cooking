import React, { useState } from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
function Navbar({dark, setDark}) {
  const [navColor, setNavColor]=useState("rgba(0, 0, 255, 0.445)")
  const [colors, setColors]= useState([ "rgba(0, 0, 255, 0.445)", "brown", "red", "black", "green", "yellow"])
  return (
  <navbar className={dark==true? " navbarall active1": "navbarall"}>
   <nav   className={dark==true? " nav1 active1": "nav1"}  style={{background:navColor}} >
   <div className="container">
        <h1>COOKING MAVIY</h1>
       <NavLink to={"/create"}> <button>Create</button></NavLink>
    </div>
   </nav >
 
  <div className="nav2">
  <div className="container">
   <div className="colors">
            <div onClick={()=>{
              setDark(!dark)
            }} className="mode"><i className="fa-solid fa-circle-half-stroke fa-rotate-180"></i></div>
            <div className="collectCol">
              {
                colors.map((item)=>{
                  return  <h3 onClick={()=>{
                    setNavColor(item)
                  }} style={{background:item}}></h3>
                })
              }
               
                
            </div>

        </div>
   </div>
 
  </div>
  </navbar>
  )
}

export default Navbar