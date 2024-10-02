import React, { useState } from 'react'

function SearchBar({searchValue, setSearchValue}) {

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div id="search-bar">
      <input onChange={handleChange} id="search-bar" type="text" value={searchValue} placeholder='🔍'/>
    </div>
  )
}

export default SearchBar