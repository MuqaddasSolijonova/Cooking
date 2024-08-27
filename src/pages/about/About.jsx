import React from 'react'
import "./About.css"
import { useNavigate, useParams } from 'react-router-dom'
function About({data}) {
  const {id}=useParams()
  const info = data.filter((item)=>{
 return item.id==id
  })
  const navigate = useNavigate()
 
  return (
   <div className="section2">
    <div className="container">
    <div className="card">
       <h1>{info[0].title}</h1>
        <h3>Cooking time: <span>{info[0].cookingTime}</span> <span><i className="fa-regular fa-clock  time"></i></span></h3>
        <p>Method:  <span>{info[0].method}</span></p>
        <h5>Ingridients: <span>{info[0].ingredients.map((item)=>{
  return ( <span>{item},</span> )
        })}</span></h5>
<button onClick={()=>{
  navigate("/")
}}><i class="fa-solid fa-arrow-left"></i></button>
       </div>
     
       
    </div>
   </div>
  )
}

export default About