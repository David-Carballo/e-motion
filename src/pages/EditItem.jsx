import React from 'react'

function EditItem() {

  return (
    <div id="edit-item">
      <form>

        <label>Titulo</label>
        <input type="text" name = "titulo" placeholder='Titulo'/>

        <label>Año</label>
        <input type= "number" name = "year" placeholder='año' />

        <label>Genero</label>
        <input type= "text" name= "genre" placeholder= "genero"/>

        <label>URL </label>
        <input type= "url" name= "url" placeholder= "URL" />

        <label>Duración</label>
        <input type="number" name= "length" placeholder='duración'/>

        <label>¿Para que estado de ánimo?</label>
        <select name="mood" id="lang">
          <option value="rage" >😡</option>
          <option value="happy">😀</option>
          <option value="sad"  >😢</option>
          <option value="scary">😱</option>
          <option value="love" >🥰</option>
        </select>

        <label>Tipo de recomendación</label>
        <select name="type" id="lang">
          <option value="song" >Canción</option>
          <option value="movie">Película</option>
          <option value="book" >Libro</option>
        </select>

        <button>Aplicar</button>

      </form>
    </div>
  )
}

export default EditItem