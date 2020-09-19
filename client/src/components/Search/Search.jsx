import React, { useState, useEffect } from 'react'



export default function Search(props) {
  const [searchTerm, updateSearchTerm] = useState('')
  const [searchTermResults, updateSearchTermResults] = useState('')

  const handleChange = (event) => {
    updateSearchTerm(event.target.value)
  }

  return ( 
    <div className='search-bar'>
      <input
        className='search'
        type='text'
        value={searchTerm}
        onChange={handleChange}
      />
      <button id='search-here'>Search</button>
    </div>
  )

}
