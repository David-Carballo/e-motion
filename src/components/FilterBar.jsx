import React from 'react'
import '../styles/FilterStyle.css'

function FilterBar({filterDuration, setFilterDuration, filterCategory, setFilterCategory}) {

  //Get valores de los inputs y hacer setFilter

  const handleChange = (event) => {
    let cloneFilter = structuredClone(filterCategory);
    cloneFilter[event.target.name] = event.target.checked;
    setFilterCategory(cloneFilter);
  }

  const handleDuration = (event) => {
    setFilterDuration(event.target.value)
  }

  return (
    <div id="filter-bar">
      {/* <input type="range" min="1" max="2"/> */}

      <div className='filter-category'>
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
    </div>
  )
}

export default FilterBar