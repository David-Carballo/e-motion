import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Carousel } from 'antd';
import axios from 'axios';

function Dashboard() {
  const navigate = useNavigate()
  const [items, setItems] = useState(null)
  
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  useEffect(() =>{
    getData()
  },[])

const getData = async () => {
  try {
    let response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/items`)
    console.log(response)
    setItems(response.data)
  } catch (error) {
    navigate("/error")
  }
}
if (items === null){
  return <div>...Loading</div>
}

  return (
   
    <div id="dashboard">
      <h1>¿Cómo te encuentras hoy?</h1>
      <div id="emojis-btn">
        <Link to="/moods/happy">😀</Link>
        <Link to="/moods/love">🥰</Link>
        <Link to="/moods/scary">😱</Link>
        <Link to="/moods/sad">😢</Link>
        <Link to="/moods/rage">😡</Link>
      </div>
      
      <Carousel autoplay>
    <div>
      <img src={items[Math.floor(Math.random() * items.length)].URL} alt={items.type} />
     
    </div>
    <div>
    <img src={items[Math.floor(Math.random() * items.length)].URL} alt={items.type}  />
    
    </div>
    <div>
    <img src={items[Math.floor(Math.random() * items.length)].URL} alt={items.type}  />
    
    </div>
    <div>
    <img src={items[Math.floor(Math.random() * items.length)].URL} alt={items.type}  />
    
    </div>
  </Carousel>
    </div>
  )
}

export default Dashboard