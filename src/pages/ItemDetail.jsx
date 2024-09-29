import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";

function ItemDetail() {
  
  const[item, setItem] = useState(null)
  const navigate = useNavigate()
  const params = useParams()


  useEffect(() =>{
    getData()
  }, [])

  const getData = async () =>{
    
    try {

      let response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/items/${params.itemId}`)
      console.log(response)
      setItem(response.data)
      
    } catch (error) {
      navigate("/error")
    }
  }

  if(item === null) return <h1>Loading...</h1>
  
  return (
  
    <div id="item-detail">

      <h3> Titulo: {item.title}</h3>
      <p> Duración:{item.length}</p>
      <p>Genero: {item.genre}</p>
      <p>Año: {item.year}</p>
      <p>Valoración: {item.rating}</p>
      <button> Añadir a favoritos </button>

      
      <div>

      <button>Edit</button>
      <button>Delete</button>
      <button className= "back-itemdet-btn"onClick={()=>{navigate(-1);}}>Back</button>
      </div>



    </div>
  )
}

export default ItemDetail