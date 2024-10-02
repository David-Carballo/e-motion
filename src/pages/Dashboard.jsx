import '../styles/Dashboard.css'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Carousel } from 'antd';
import axios from 'axios';
import { PacmanLoader } from 'react-spinners';

function Dashboard({setColorTheme}) {
  const navigate = useNavigate()
  const [items, setItems] = useState(null)

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

  if (items === null){
    return <PacmanLoader color="#eeec0b" className="pacman"/>
  }

  let index1 = Math.floor(Math.random() * items.length)
  let index2 = Math.floor(Math.random() * items.length)
  let index3 = Math.floor(Math.random() * items.length)
  let index4 = Math.floor(Math.random() * items.length)
  let index5 = Math.floor(Math.random() * items.length)
  let index6 = Math.floor(Math.random() * items.length)

  return (
   
    <div id="dashboard" className='flex-column'>
      <div className='mood-container'>
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
            <Link to={`/items/${items[index1].id}`}>
              <img src={items[index1].URL} alt={items.type} />
            </Link>
          </div>
          <div>
            <Link to={`/items/${items[index2].id}`}>
              <img src={items[index2].URL} alt={items.type} />
            </Link>
          </div>

          <div>
            <Link to={`/items/${items[index3].id}`}>
              <img src={items[index3].URL} alt={items.type} />
            </Link>
          </div>
          <div>
            <Link to={`/items/${items[index4].id}`}>
              <img src={items[index4].URL} alt={items.type} />
            </Link>
          </div>
          <div>
            <Link to={`/items/${items[index5].id}`}>
              <img src={items[index5].URL} alt={items.type} />
            </Link>
          </div>
          <div>
            <Link to={`/items/${items[index6].id}`}>
              <img src={items[index6].URL} alt={items.type} />
            </Link>
          </div>
        </Carousel>
      </div>
      <div className="carousel">
        <h6>Añadidas recientemente</h6>
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
          <div>
            <Link to={`/items/${items[items.length-5].id}`}>
              <img src={items[items.length-5].URL} alt={items.type} />
            </Link>
          </div>
          <div>
            <Link to={`/items/${items[items.length-6].id}`}>
              <img src={items[items.length-6].URL} alt={items.type} />
            </Link>
          </div>
          
        </Carousel>
      </div>
    </div>
  )
}

export default Dashboard