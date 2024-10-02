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
      {/* <div className='filter-duration'>
          {filterCategory.songs ? (
            <>
              <p>{`Máx. segundos: ${filterDuration/60} segs`}</p>
              <input onChange={handleDuration} type="range" min="0" max="300" step="10" value={filterDuration}/>
            </>
          ) : null}
          {
           filterCategory.books ? (
            <>
              <p>{`Máx. páginas: ${filterDuration} págs`}</p>
              <input onChange={handleDuration} type="range" min="0" max="300" step="10" value={filterDuration}/>
            </>
            ) : null
          }
          {
           filterCategory.movies ? (
            <>
              <p>{`Máx. minutos: ${filterDuration} minutos`}</p>
              <input onChange={handleDuration} type="range" min="0" max="300" step="10" value={filterDuration}/>
            </>
           ) : null
          }
      </div> */}
    </div>
  )
}

export default FilterBar