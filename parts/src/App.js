import React, {useState, useEffect} from 'react';
import person from './services/person';
import personServices from './services/person'

const App = () => {
  const [datas, setDatas] = useState([])
  const [name, setName] = useState('')
  const [search, setSearch] = useState('')
  const [number, setNumber] = useState(Number())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    personServices.getAll()
    .then(result => {
      setDatas(result.data)
      setIsLoading(false)
    } )
  }, [])


  // HANDLERS
  // add Handler
  const addNote = (e) => {
    e.preventDefault()
    const Person= {
      name,
      number,
      important:true
    }
    // Fetching datas
    const w= datas.map(data=>data)
    const user = w.map(consumer=> {
      const user = {
        name: consumer.name,
        id: consumer.id
      }
      return user
    })
   
    // Finding name which is in the DB
    const q= user.find(tn=> tn.name === name)
    // console.log(q);

    // Cheking if the name is saved in the DB so that either to send POST or PUT method to the server
    if (q) {
      personServices.update(q.id,Person)
        .then(result=> console.log(result))
    } else {
      personServices.create(Person)
        .then(result => {
          console.log(result);
        })
    }
  }

  // Delete handlers
  const deletePerson = (id) => {
    personServices.deletePerson(id)
  }

  // ONCHANGES
  // nameOnChange
  const nameOnChange = (e) => {
    setName(e.target.value)
  }
  // numberOnChange
  const numberOnChange = (e) => {
    setNumber(e.target.value)
  }
  // searchOnChange
  const searchOnChange = (e) => {
    setSearch(e.target.value)
  } 
  const x = datas.map(data=> data)
  const searchName = x.map(q=> q.name)
  return(
    <>
      <h1>Phonebook</h1>
      <Search search={search} searchOnChange={searchOnChange} data={searchName} />
      <AddNew addNote={addNote} name={name} number={number} nameOnChange={nameOnChange} numberOnChange={numberOnChange} />
      <Notes datas={datas} isLoading={isLoading} deletePerson={deletePerson} />
    </>
  )
}

export default App

const Search = ({search, data, searchOnChange}) => {
   const toShow =data.filter(name=> name === search )
  return(
    <>
      <label htmlFor="filter">Filter shown with: <input type="text" name="filter" value={search} onChange={searchOnChange} /></label>

      <div className="result">
        <p className='search' >{search}</p>
        <h1>{toShow}</h1>
      </div>
    </>
  )
}

const AddNew = (props) => { 
  return(
    <>
      <h2>add a new</h2>
      <form action="" onSubmit={props.addNote} >
      <label htmlFor="name">name: <input type="text" name="name" value={props.name} onChange={props.nameOnChange} /></label>
      <br />
      <label htmlFor="number">number: <input type="text" value={props.number} onChange={props.numberOnChange} /></label>
      <br />
      <button type="submit">add</button>
      </form>
    </>
  )
 }

const Notes = ({datas, isLoading, deletePerson}) => { 
  const x = datas.map(data=> data)
  
  return(
    <>
      <h2>Notes</h2>
      {isLoading ? <h3>Loading...</h3> : x.map(person=> <Note key={person.id} id={person.id} deletePerson={deletePerson} name={person.name} number={person.number} /> ) }
      
    </>
  )
 }

 const Note = (props) => { 
   return(
     <>
        {/* <p>Lorem, ipsum</p> */}
        <div className='note' >
          <p>{props.name}</p>
          <p>{props.number}</p>
          <button onClick={()=>props.deletePerson(props.id)} >delete</button>
        </div>
     </>
   )
  }