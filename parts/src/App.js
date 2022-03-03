import React, {useState, useEffect} from 'react';
import axios from 'axios';
import noteService from './services/notes'

const App = () => {
  const [datas, setDatas] = useState([])

  useEffect(() => {
    noteService.getAll()
    .then(result => setDatas(result.data))
  }, [])
  return(
    <>
      <h1>Phonebook</h1>
      <Search />
      <AddNew />
      <Notes datas={datas} />
    </>
  )
}

export default App

const Search = (props) => {
  return(
    <>
      <label htmlFor="filter">Filter shown with: <input type="text" name="filter" /></label>
    </>
  )
}

const AddNew = (props) => { 
  return(
    <>
      <h2>add a new</h2>
      <label htmlFor="name">name: <input type="text" name="name"/></label>
      <br />
      <label htmlFor="number">number: <input type="text" /></label>
    </>
  )
 }

const Notes = ({datas}) => { 
  const x = datas.map(data=> data.content)
  console.log(x);
  return(
    <>
      <h2>Notes</h2>
    
      {x.map(i=> <Note i={i} /> )}
    </>
  )
 }

 const Note = (props) => { 
   return(
     <>
        {/* <p>Lorem, ipsum</p> */}
        <div className='note' >
          <p>{props.i}</p>
          <button >delete</button>
        </div>
     </>
   )
  }