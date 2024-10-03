import '../styles/AddItem.css'
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Rating from '@mui/material/Rating';


function AddItem({setColorTheme}) {

  const navigate = useNavigate()

  useEffect(()=>{
    setColorTheme("dark");
  },[])

  const [title, setTitle]= useState("")
  const [year, setYear] = useState(0)
  const [genre, setGenre]= useState("")
  const [url, setUrl]= useState("")
  const [length, setLength]= useState(0)
  const [moodId, setMoodId]= useState("rage")
  const [rating, setRating]= useState(null)
  const [isFavorite, setIsFavorite] = useState(false)
  const [type, setType] = useState("")
  const [youtube, setYoutube] = useState("")

  const handleTitle = (e) => setTitle(e.target.value)
  const handleYear = (e) => setYear(e.target.value)
  const handleGenre = (e) => setGenre(e.target.value)
  const handleUrl = (e) => setUrl(e.target.value)
  const handleMoodId = (e) => setMoodId(e.target.value)
  const handleLength = (e) => setLength(e.target.value)
  const handleRating = (e) => setRating (parseInt(e.target.value))
  const handleIsFavorite = (e) => setIsFavorite (e.target.value)
  const handleType = (e) => setType (e.target.value)
  const handleYoutube = (e) => {
    const parts= (e.target.value).split("v=")[1]
    const urlYoutube = `https://www.youtube.com/embed/${parts}`
    // console.log(urlYoutube)
    setYoutube(urlYoutube)
  }


  const handleFormSubmit = async (event) => {
  
    event.preventDefault()
    const newItem = {
      title,
      year,
      genre,
      url,
      length,
      moodId,
      rating,
      isFavorite: false,
      type,
      youtube
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/items`,newItem)
      navigate(`/moods/${moodId}`)
    } catch (error) {
      console.log(error);
      return navigate("/error")
    }

  }

  return (
    <div id="add-item">



      <form onSubmit={handleFormSubmit}>
        
        <h3>Añadir recomendación</h3>
        
        <label>Título</label>
        <input type="text" name = "titulo" placeholder='título' value ={title} onChange= {handleTitle} required/>

        <label>Año</label>
        <input type= "number" name = "year" placeholder='año' value={year} onChange={handleYear} required/>

        <label>Género</label>
        <input type= "text" name= "genre" placeholder= "genero" value = {genre} onChange ={handleGenre} required/>

        <label>Imagen (Solo acepta formato JPG o PNG) </label>
        <input type= "url" name= "url" placeholder= "url" value = {url} onChange={handleUrl} pattern=".*\.(jpg|png)$" required/>

        <label>Duración</label>
        <input type="number" name= "length" placeholder='duración' value={length} onChange={handleLength} required/>
          
        <label>URL Youtube </label>
        <input type= "url" name= "youtube" placeholder= "URL Youtube" value = {youtube} onChange={handleYoutube} required/>

        <label>¿Qué estado de ánimo representa?</label>
        <select onChange={handleMoodId} value={moodId} name="mood" id="lang1" required>
            <option value="rage">😡</option>
            <option value="happy">😀</option>
            <option value="sad">😢</option>
            <option value="scary">😱</option>
            <option value="love">🥰</option>
        </select>

        <label>Tipo de recomendación</label>
        <select onChange={handleType} value={type} name="type" id="lang" required>
          <option value="song">Cancion</option>
          <option value="movie">Pelicula</option>
          <option value="book">Libro</option>
        </select>
        {/* onChange={(event, newValue) => {setRating(newValue)}} */}
        <label>Valoración</label>
        <Rating name="simple-controlled" value={parseInt(rating)} onChange={handleRating} required/>
        <Button type="submit" variant="outline-success" id= "add-btn">Añadir recomendación</Button>{' '}
      </form>


    </div>
  )
}

export default AddItem