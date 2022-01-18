import React, { useState } from 'react'

import Notes from './Components/Notes'

const App = () => {
  // useStates
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [search, setSearch] = useState('')
  const [toShow, setToShow] = useState(" ")
  
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
    
    // setPersons(persons.concat(addName))

    if (newName === persons[0].name ) {
      // alert(`${newName} is alredary exintesd`);
     }
    setPersons(persons.concat(addName))
    // alert(`${newName} added in the database`);
     

    setNewName('')
    setPhoneNumber('')

  }
  // Input value handler 
  const onChangeHandler=(event)=>{
    console.log(event.target.value);
    setNewName( event.target.value )
  }

  const onChangeNumberH= (event)=>{
    // console.log(event.target.value);
    setPhoneNumber(event.target.value)
  }

  const searchOnChangeH=(event)=>{
    setSearch(event.target.value)
  }

  // const peopleToShow= persons.filter( person=> person.name === search)
  const peopleToShow= search === " "? persons : persons.filter(person => person.name === search );
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input type="text" value={search} onChange={searchOnChangeH} />
      </div>
      <h2>add a new user</h2>
      <form onSubmit={addHandler} >
        <div>
          name: <input value={newName} onChange={onChangeHandler} />
          <br />
          number: <input type="text" value={phoneNumber} onChange={onChangeNumberH} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {peopleToShow.map( people => 
        <Notes key={ people.id } person={people.name} number={people.number} /> 
    )
      
      }
    </div>
  )
}

export default App

