import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Mood() {

  const [moodData, setMoodData] = useState(null);
  const [filterCategory, setFilterCategory] = useState({films: false, books: false, songs:false})

  const {moodId} = useParams();

  useEffect(()=>{
    getMoodData();
  }, [])

  const getMoodData = async () => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/moods/${moodId}?_embed=items`)
    console.log(response.data);
    setMoodData(response.data);
  }

  if(!moodData) return <h1>Loading...</h1>

  return (
    <div id="mood">
      <div className='mood-feel'>
        <h2>{moodData.emoji} {moodData.message}</h2>
      </div>
      <div className='filters'>
        <SearchBar />
        <FilterBar setFilterCategory={setFilterCategory}/>
      </div>
      <div id="grid">
        {/* Aqui añadir filter segun FilterCategory*/}
        {moodData.items.map((item)=>{
          return (<Card key={item.id} {...item}/>)
        })}
        
      </div>

    </div>
  )
}

export default Mood