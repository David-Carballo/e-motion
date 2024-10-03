import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import LinearProgress from '@mui/material/LinearProgress';


function Mood({setColorTheme}) {
  const {moodId} = useParams();

  const [moodData, setMoodData] = useState(null);

  //Filter states
  const [filterCategory, setFilterCategory] = useState({movies: false, books: false, songs:false})
  const [searchValue, setSearchValue] = useState("");
  const [filterDuration, setFilterDuration] = useState(200);


  useEffect(()=>{
    getMoodData();   
  }, [])

  const getMoodData = async () => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/moods/${moodId}?_embed=items`)
    setMoodData(response.data);
    setColorTheme(response.data.color);
  }

  // Crear un skeleton para mostrar loading
  if(!moodData) {
    return  (
      <div id="mood" className='flex-row'>
        <Box sx={{ width: 240 }}>
          <Skeleton sx={{ bgcolor: 'var(--shadow-accent)' }} animation="wave" width={210} height={210} />
          <Skeleton sx={{ bgcolor: 'var(--shadow-accent)' }} animation="wave" width={210} height={210} />
        </Box>
        <Box sx={{ width: 240 }}>
          <Skeleton sx={{ bgcolor: 'var(--shadow-accent)' }} animation="wave" width={210} height={210} />
          <Skeleton sx={{ bgcolor: 'var(--shadow-accent)' }} animation="wave" width={210} height={210} />
        </Box>
        <Box sx={{ width: 240 }}>
          <Skeleton sx={{ bgcolor: 'var(--shadow-accent)' }} animation="wave" width={210} height={210} />
          <Skeleton sx={{ bgcolor: 'var(--shadow-accent)' }} animation="wave" width={210} height={210} />
        </Box>
      </div>

    )
  }

  return (
    <div id="mood">
      <div className='mood-feel flex-row'>
        <h3>{moodData.emoji} {moodData.message}</h3>
      </div>
      <div className='filter-container'>
        <div className='filters flex-column'>
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
          <FilterBar filterDuration={filterDuration} setFilterDuration={setFilterDuration} filterCategory={filterCategory} setFilterCategory={setFilterCategory}/>
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

    </div>
  )
}

export default Mood