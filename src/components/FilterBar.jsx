import React from 'react'

function FilterBar({filterCategory, setFilterCategory}) {

  //Get valores de los inputs y hacer setFilter

  const handleChange = (event) => {
    let cloneFilter = structuredClone(filterCategory);
    cloneFilter[event.target.name] = event.target.checked;
    setFilterCategory(cloneFilter);
  }

  return (
    <div id="filter-bar">
      {/* <input type="range" min="1" max="2"/> */}

      <div className='filter-category'>
        <input onChange={handleChange} type="checkbox" name="films"/>
        <label>Films</label>
        <input onChange={handleChange} type="checkbox" name="books"/>
        <label>Books</label>
        <input onChange={handleChange} type="checkbox" name="songs"/>
        <label>Songs</label>
      </div>

    </div>
  )
}

export default FilterBar