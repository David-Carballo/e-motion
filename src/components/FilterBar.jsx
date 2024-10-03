import React from 'react'
import '../styles/FilterStyle.css'
import Rating from '@mui/material/Rating';

function FilterBar({filterRating, setFilterRating, filterCategory, setFilterCategory}) {

  //Get valores de los inputs y hacer setFilter

  const handleChange = (event) => {
    let cloneFilter = structuredClone(filterCategory);
    cloneFilter[event.target.name] = event.target.checked;
    setFilterCategory(cloneFilter);
  }

  const handleRating = (event) => {
    setFilterRating(event.target.value);
  }

  return (
    <div id="filter-bar" className='gap-10'>
      {/* <input type="range" min="1" max="2"/> */}

      <div className='filter-category'>
        <label>Categoría</label>
        <div className='checkbox-row'>
          <input onChange={handleChange} type="checkbox" name="movies"/>
          <label>Películas</label>
        </div>
        <div className='checkbox-row'>
          <input onChange={handleChange} type="checkbox" name="books"/>
          <label>Libros</label>
        </div>
        <div className='checkbox-row'>
          <input onChange={handleChange} type="checkbox" name="songs"/>
          <label>Canciones</label>
        </div>
      </div>
      <div className='filter-rating'>
        <label>Valoración mínima</label>
        <Rating name="simple-controlled" value={filterRating} onChange={handleRating} />
      </div>
    </div>
  )
}

export default FilterBar