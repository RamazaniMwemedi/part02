import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Components
import Form from './Components/Form'
import Search from './Components/Search'
import Number from './Components/Number'


const App = () => {
  // useStates
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [search, setSearch] = useState('')
  
  // Form handler 
  const addHandler=(event)=>{
    event.preventDefault()
    console.log(event.target);

    // Adding new person
    const addName={
      name:newName,
      number: phoneNumber,
      date: new Date().toISOString(),
      important: Math.random()>0.5,
      id: persons.length +1,
    }
    setPersons(persons.concat(addName))

    setNewName('')
    setPhoneNumber('')

  }
  // useEffect
  useEffect(() => {
    axios.get("http://localhost:3001/persons")
        .then((res)=>{
          console.log(res.data);
          setPersons(res.data)
        })
  }, [])

  // Input value handler 
  const onChangeHandler=(event)=>{
    console.log(event.target.value);
    setNewName( event.target.value )
  }

  const onChangeNumberH= (event)=>{
    setPhoneNumber(event.target.value)
  }

  const searchOnChangeH=(event)=>{
    setSearch(event.target.value)
  }
  
  const peopleToShow= search == ""? persons : persons.filter(person => person.name == search );
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        {/* Search */}
        <Search search={search} searchOnChangeH={searchOnChangeH} />
      </div>
      <h2>add a new user</h2>
      {/* Form */}
      <Form addHandler={addHandler} newName={newName} onChangeHandler={onChangeHandler} phoneNumber={phoneNumber} onChangeNumberH={onChangeNumberH} />
      {/* Number */}
      <Number peopleToShow={peopleToShow} />
    </div>
  )
}

export default App

