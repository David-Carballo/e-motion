import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
import EditItem from './EditItem';
import { Image } from 'antd'
import {Popconfirm } from 'antd'
import { Alert } from 'antd'


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
      console.log(response)
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

  if(item === null) return <h1>Loading...</h1>
  
  return (
  
    <div id="item-detail">
      <Image
          width={200}
          src={item.URL}
          preview={{
            destroyOnClose: true,
            imageRender: () => (
              <img
                style={{height:"90%", width:"auto"}}
                controls
                src={item.URL}
              />
            ),
            toolbarRender: () => null,
          }}
        />
      <h3> Titulo: {item.title}</h3>
      <p> Duración:{item.length}</p>
      <p>Genero: {item.genre}</p>
      <p>Año: {item.year}</p>
      <p>Valoración: {item.rating}</p>

      <button> Añadir a favoritos </button>

      
      <div>

      <button>Edit</button>
      <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    okText="Yes" onConfirm={handleDelete}
    cancelText="No" onCancel={null}
  >
    <button>Delete</button>
  </Popconfirm>
      <button className= "back-itemdet-btn"onClick={()=>{navigate(-1);}}>Back</button>
      </div>

      <EditItem item ={item} setItem= {setItem} />
     

    </div>

  )
}

export default ItemDetail