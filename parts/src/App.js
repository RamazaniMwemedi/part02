import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Components
import Search from './Components/Search'
import Number from './Components/Number'


const App = () => {
  const [search, setSearch]= useState('')

  // On submit handler
  const onSubmit=(e)=>{
    e.preventDefault()
    console.log(e.target);
  }

  const onSearch=(e)=>{
    setSearch(e.target.value)
  }

  return(
    <>
      <h1>Coutries</h1>
      <Search onSubmit={onSubmit} onSearch={onSearch} search={search} />

    </>
  )
}

export default App

