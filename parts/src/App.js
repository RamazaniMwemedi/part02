import React, { useState } from 'react'

import Notes from './Components/Notes'

const App = () => {
  const [persons, setPersons] = useState([
    {name:'Ramazani'}
    
  ]) 
  const [newName, setNewName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState(0)

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
      alert(`${newName} is alredary exintesd`);
     }
    setPersons(persons.concat(addName))
    alert(`${newName} added in the database`);
     

    setNewName('')

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
  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map(person=> <Notes key={person.id} names={person.name} number={person.number} /> )}
    </div>
  )
}

export default App

