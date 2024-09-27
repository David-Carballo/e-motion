import React, { useState } from 'react'

function SearchBar() {

  const [searchValue, setSearchValue] = useState("")

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div>
      <input onChange={handleChange} id="search-bar" type="text" value={searchValue}/>
    </div>
  )
}

export default SearchBar