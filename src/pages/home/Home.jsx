import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom'
function Home({ data , setData, setDark, dark}) {
  const deleted= (id)=>{
    const delone=data.filter((item)=>{
      return item.id !=id
    })
        localStorage.setItem("menu", JSON.stringify(delone))
    setData(delone)
  } 
  

  
  return (
    <section className={dark==true? " section1 active": "section1"}>
      <div className="container">

        <div className="block">
          {  data.length>0 ?
            data.map((item) => {
              return (
                <div  className="box">
                <div onClick={()=>{
                   deleted(item.id)
                }} className="del"><i className="fa-solid fa-trash"></i></div>
                <h1 >{item.title}</h1>
              <h3>Cooking times:{item.cookingTime} <span><i className="fa-regular fa-clock  time"></i></span></h3>
              <p>{item.method.slice(0,100)}...</p>
              <NavLink to={`/about/${item.id}`}>  <button   onClick={()=>{
                oneData()
              }} className='btn'>Read more  more more</button></NavLink>
              </div>
              )
            }) : <div><h2>hech narsa yo'q</h2></div>
          }
         
        </div>
      </div>
    </section>
  )
}

export default Home