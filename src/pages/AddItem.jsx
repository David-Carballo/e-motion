import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


function AddItem() {

  const navigate = useNavigate()

  const [title, setTitle]= useState("")
  const [year, setYear] = useState(0)
  const [genre, setGenre]= useState("")
  const [url, setUrl]= useState("")
  const [length, setLength]= useState(0)
  const [moodId, setMoodId]= useState(0)
  const [rating, setRating]= useState(null)
  const [isFavorite, setIsFavorite] = useState(false)
  const [type, setType] = useState("")

  const handleTitle = (e) => setTitle(e.target.value)
  const handleYear = (e) => setYear(e.target.value)
  const handleGenre = (e) => setGenre(e.target.value)
  const handleUrl = (e) => setUrl(e.target.value)
  const handleMoodId = (e) => setMoodId(e.target.value)
  const handleLength = (e) => setLength(e.target.value)
  const handleRating = (e) => setRating (e.target.value)
  const handleIsFavorite = (e) => setIsFavorite (e.target.value)
  const handleType = (e) => setType (e.target.value)

  const handleFormSubmit = async (event) => {
  
    event.preventDefault()
    console.log("SUBMIT")
    const newItem = {
      title,
      year,
      genre,
      url,
      length,
      moodId,
      rating: null,
      isFavorite: false,
      type,

    }

    try {
      
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/items`,newItem)

      navigate("/moods/:moodId")




    } catch (error) {
      console.log(error);
      return navigate("/error")
    }

  }

  return (
    <div id="add-item">

      <form onSubmit={handleFormSubmit}>
        
        <h3>Si desea añadir alguna recomendación, rellene el siguiente formulario</h3>
        
        <label>Titulo</label>
        <input
        type="text"
        name = "titulo"
        placeholder='Titulo'
        value ={title}
        onChange= {handleTitle}
        />

        <label>Año</label>
        <input
        type= "number"
        name = "year"
        placeholder='año'
        value={year}
        onChange={handleYear}
        />

        <label>Genero</label>
        <input
        type= "text"
        name= "genre"
        placeholder= "genero"
        value = {genre}
        onChange ={handleGenre}
        />

        <label>URL </label>
        <input
        type= "url"
        name= "url"
        placeholder= "URL"
        value = {url}
        onChange={handleUrl}
        />

        <label>Duración</label>
        <input
        type="number"
        name= "length"
        placeholder='duración'
        value={length}
        onChange={handleLength}
        />

        <label>¿Para que estado de ánimo?</label>
        <select onChange={handleMoodId} value={moodId} name="mood" id="lang1">
            <option value="rage">😡</option>
            <option value="happy">😀</option>
            <option value="sad">😢</option>
            <option value="scary">😱</option>
            <option value="love">🥰</option>

        </select>

        <label>Tipo de recomendación</label>
        <select onChange={handleType} value={type} name="type" id="lang">
            <option value="song">Cancion</option>
            <option value="movie">Pelicula</option>
            <option value="book">Libro</option>

            </select>

            <label>Valoración</label>
            <div id="stack">
            
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    
    </div>
      <Button type="submit" variant="outline-success" id= "add-btn">Añadir recomendación</Button>{' '}
     {/*<button id= "add-btn">Añadir formulario</button>*/}
      </form>


    </div>
  )
}

export default AddItem