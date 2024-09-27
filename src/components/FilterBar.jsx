import React from 'react'

function FilterBar({setFilterCategory}) {

  //Get valores de los inputs y hacer setFilter

  return (
    <div>
      {/* <input type="range" min="1" max="2"/> */}

      <div className='filter-category'>
        <input type="checkbox" name="films"/>
        <label>Films</label>
        <input type="checkbox" name="books"/>
        <label>Books</label>
        <input type="checkbox" name="songs"/>
        <label>Songs</label>
      </div>

    </div>
  )
}

export default FilterBar