import React, { useState } from 'react'
import "./Create.css"
import { useNavigate } from 'react-router-dom'
function Create({ setData, data }) {
  const navigate = useNavigate()
  const [input1, setInput1] = useState()
  const [input2, setInput2] = useState("")
  const [inputT, setInputT] = useState([])
  const [input3, setInput3] = useState()
  const [input4, setInput4] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newmenu = {
      id: Math.random() * 9999,
      title: input1,
      ingredients: inputT,
      method: input3,
      cookingTime: input4
    }
   
    
    setData([...data, newmenu])
   localStorage.setItem("menu", JSON.stringify([...data, newmenu]))
    // localStorage.setItem(JSON.stringify("menu", data))
    // setData(JSON.parse(localStorage.getItem("menu")))
    
    navigate("/")
  }

  return (
    <div className="section3">
      <div className="container">
        <form onSubmit={handleSubmit} action="">
          <label htmlFor="">Title</label>
          <input onInput={(e) => {
            setInput1(e.target.value)
            console.log(e.target.value);

          }} required type="text" />
          <div className="ingredient">
            <div className='typ'>
              <label htmlFor="">Ingredients</label>
              <input value={input2} onInput={(e) => {
                setInput2(e.target.value)
              }}  type="text" />
              <h3 className='text'>Ingredients: {inputT.map((item) => {
                return (<p>{item}</p>)
              })}</h3>
            </div>
            <button onClick={() => {
              
              setInputT([...inputT, input2])
              console.log(inputT);
              setInput2("")
             
            }} className='add' type='button'>Add</button>
          </div>
          <label htmlFor="">Method</label>
          <textarea onInput={(e) => {
            setInput3(e.target.value)
          }} required name="" id="" cols="30" rows="10"></textarea>
          {/* <input type="text" /> */}
          <label htmlFor="">Cooking time</label>
          <input onInput={(e) => {
            setInput4(e.target.value)


          }} required type="text" />


          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create