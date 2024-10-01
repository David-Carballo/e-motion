import { useState } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import React from "react";
import { Alert } from "antd";
import { useEffect } from "react";

function EditItem() {
  
  const [editFormItem, setEditFormItem] = useState(null);
  const params = useParams();
  const [showAlert, setShowAlert] = useState(false);
 const navigate = useNavigate()


  useEffect(() =>{

    getData()

  },[])

  const getData= async () => {
    try {
      let response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/items/${params.itemId}`)
      setEditFormItem(response.data)
      
    } catch (error) {
      navigate("/error")
    }

  }
  const handleChange = (event) => {
    const itemClone = structuredClone(editFormItem);
    itemClone[event.target.name] = event.target.value;

    setEditFormItem(itemClone);
  };

  const handleEditItem = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_SERVER_URL}/items/${params.itemId}`,
        editFormItem
      );
      setShowAlert(true);
    } catch (error) {
    navigate("/error")
    }
  };

  if(editFormItem === null) return <h1>Loading...</h1>
  
  return (
    <div id="edit-item">
      <form onSubmit={handleEditItem}>
        <label>Titulo</label>
        <input
          type="text"
          value={editFormItem.title}
          onChange={handleChange}
          name="title"
          placeholder="Titulo"
        />
        <label>Año</label>
        <input
          type="number"
          value={editFormItem.year}
          onChange={handleChange}
          name="year"
          placeholder="año"
        />
        <label>Genero</label>
        <input
          type="text"
          value={editFormItem.genre}
          onChange={handleChange}
          name="genre"
          placeholder="genero"
        />
        <label>URL </label>
        <input
          type="url"
          value={editFormItem.url}
          onChange={handleChange}
          name="url"
          placeholder="URL"
        />
        <label>Duración</label>
        <input
          type="number"
          value={editFormItem.length}
          onChange={handleChange}
          name="length"
          placeholder="duración"
        />
        <label>¿Para que estado de ánimo?</label>
        <select
          onChange={handleChange}
          value={editFormItem.MoodId}
          name="mood"
          id="lang"
        >
          <option value="rage">😡</option>
          <option value="happy">😀</option>
          <option value="sad">😢</option>
          <option value="scary">😱</option>
          <option value="love">🥰</option>
        </select>
        <label>Tipo de recomendación</label>
        <select
          onChange={handleChange}
          value={editFormItem.type}
          name="type"
          id="lang"
        >
          <option value="song">Canción</option>
          <option value="movie">Película</option>
          <option value="book">Libro</option>
        </select>
        <Button type="submit" variant="outline-success">
          Aplicar
        </Button>{" "}
      </form>
      {showAlert ? (
        <Alert
          message="Modificación realizada"
          description="Los datos modificados han sido registrados con éxito"
          type="success"
          showIcon
        />
      ) : null}
    </div>
  );
}

export default EditItem;
