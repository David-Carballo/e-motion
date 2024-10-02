import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Carousel } from 'antd';
import axios from 'axios';

function Dashboard({setColorTheme}) {
  const navigate = useNavigate()
  const [items, setItems] = useState(null)
  
  
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    effect: "fade",
   
  };

  useEffect(() =>{
    setColorTheme("dark");
    getData()
  },[])

  const getData = async () => {
    try {
      let response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/items`)
      // console.log(response)
      setItems(response.data)
    } catch (error) {
      navigate("/error")
    }
  }

  const getRandom = () => {
    return Math.floor(Math.random() * items.length)
  }


if (items === null){
  return <div>...Loading</div>
}

  return (
   
    <div id="dashboard" className='flex-column'>
      <div>
        <h3>¿Cómo te encuentras hoy?</h3>
        <div id="emojis-btn" className='flex-row gap-10'>
          <Link to="/moods/happy">😀</Link>
          <Link to="/moods/love">🥰</Link>
          <Link to="/moods/scary">😱</Link>
          <Link to="/moods/sad">😢</Link>
          <Link to="/moods/rage">😡</Link>
        </div>
      </div>
      <div className="carousel">
        <h6>Recomendaciones</h6>
        <Carousel autoplay slidesToShow={3} className='flex-row'>
          <div>
            <img src={items[Math.floor(Math.random() * items.length)].URL} alt={items.type} />
          </div>
          <div>
            <img src={items[Math.floor(Math.random() * items.length)].URL} alt={items.type} />
          </div>
          <div>
            <img src={items[Math.floor(Math.random() * items.length)].URL} alt={items.type} />
          </div>
          <div>
            <img src={items[Math.floor(Math.random() * items.length)].URL} alt={items.type} />
          </div>
        </Carousel>
      </div>
      <div className="carousel">
        <h6>Recomendaciones añadidas recientemente</h6>
        <Carousel autoplay slidesToShow={3}>
          <div>
            <Link to={`/items/${items[items.length-1].id}`}>
              <img src={items[items.length-1].URL} alt={items.type} />
            </Link>
          </div>
          <div>
            <Link to={`/items/${items[items.length-2].id}`}>
              <img src={items[items.length-2].URL} alt={items.type} />
            </Link>
          </div>
          <div>
            <Link to={`/items/${items[items.length-3].id}`}>
              <img src={items[items.length-3].URL} alt={items.type} />
            </Link>
          </div>
          <div>
            <Link to={`/items/${items[items.length-4].id}`}>
              <img src={items[items.length-4].URL} alt={items.type} />
            </Link>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Dashboard