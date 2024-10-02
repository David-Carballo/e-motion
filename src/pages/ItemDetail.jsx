import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
import { Image } from 'antd'
import {Popconfirm } from 'antd'
import { PacmanLoader } from 'react-spinners';
import favLogo from "/src/assets/fav.png"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function ItemDetail() {
  
  const[item, setItem] = useState(null)
  const navigate = useNavigate()
  const params = useParams()
 
  const success = () => {
    messageApi.open({
      type: 'success',
      content: "Recomendación eliminada",
    });
  }

  useEffect(() =>{
    getData()
  }, [])

  const getData = async () =>{
    try {
      let response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/items/${params.itemId}`)
      // console.log(response)
      setItem(response.data)
    } catch (error) {
      navigate("/error")
    }
  }

  const handleDelete = async () =>{
    try {
      let response = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/items/${params.itemId}`)
      setTimeout(() =>{
        navigate(-1)
      },500)
    } catch (error) {
      navigate("/error")
    }
  }

  const handleIsFavorite = async () =>{
    try {
      const cloneItem = structuredClone(item);
      cloneItem.isFavorite = !item.isFavorite;
      setItem(cloneItem);

      await axios.patch(`${import.meta.env.VITE_SERVER_URL}/items/${params.itemId}`, {isFavorite: cloneItem.isFavorite});
      
    } catch (error) {
      console.log(error);
    }
  }

  if(item === null) return <PacmanLoader color="#eeec0b" className="pacman"/>
  
  return (
  
    <div id="item-detail">
      
      <Image width={200} src={item.URL} preview={{
            destroyOnClose: true,
            imageRender: () => (
              <img
                style={{height:"90%", width:"auto"}}
                controls
                src={item.URL}
              />
            ),
            toolbarRender: () => null
          }}

      />
<img src={favLogo} onClick={handleIsFavorite} className={item.isFavorite ? "img-fav" : "img-nofav" } style={{width:"50px"}}/>
      <br></br>
      <h3>Titulo: {item.title}</h3>
      <p>Duración:{item.length}</p>
      <p>Genero: {item.genre}</p>
      <p>Año: {item.year}</p>
      <p>Valoración: {item.rating}</p>
      
      

      <div>
      <br></br>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Link to={`/edit-item/${item.id}`}><Button>Edit</Button></Link>
        <Popconfirm title="Eliminar recomendación" description="¿Estas seguro de eliminar esta recomendación?" okText="Si" 
        onConfirm={handleDelete} cancelText="No" onCancel={null}
        >
          <Button>Delete</Button>
        </Popconfirm>
        <Button className= "back-itemdet-btn"onClick={()=>{navigate(-1);}}>Back</Button>
        </ButtonGroup>
      </div>
    </div>

  )
}

export default ItemDetail