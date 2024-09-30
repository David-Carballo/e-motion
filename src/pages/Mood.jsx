import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Mood() {
  const {moodId} = useParams();

  const [moodData, setMoodData] = useState(null);

  //Filter states
  const [filterCategory, setFilterCategory] = useState({movies: false, books: false, songs:false})
  const [searchValue, setSearchValue] = useState("");

  useEffect(()=>{
    getMoodData();
  }, [])

  const getMoodData = async () => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/moods/${moodId}?_embed=items`)
    // console.log(response.data);
    setMoodData(response.data);
  }

  // Crear un skeleton para mostrar loading
  if(!moodData) return <h1>Loading...</h1>

  return (
    <div id="mood">
      <div className='mood-feel flex-row'>
        <h1>{moodData.emoji} {moodData.message}</h1>
      </div>
      <div className='filters flex-column'>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
        <FilterBar filterCategory={filterCategory} setFilterCategory={setFilterCategory}/>
      </div>
      <div id="grid" className='flex-row'>
        {moodData.items
        .filter(item=>item.title.toLowerCase().includes(searchValue.toLowerCase()))
        .filter(item=>{
          if(!filterCategory.books && !filterCategory.songs && !filterCategory.movies) return true;
          if(filterCategory.books && item.type === "book") return true;
          if(filterCategory.movies && item.type === "movie") return true;
          if(filterCategory.songs && item.type === "song") return true;
          else return false;
        })
        .map((item)=>{
          return (<Card key={item.id} {...item}/>)
        })}
        
      </div>

    </div>
  )
}

export default Mood