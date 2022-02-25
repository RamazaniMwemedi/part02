import React, {useState, useEffect} from 'react';
import noteService from './services/notes'

function App () {

  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState(Number()); 
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState([]);

  const snotes= datas.filter(data=> data.name.startsWith(search) || data.name === search ) 
  const toShow = snotes.map(note=>{note})

  // Form Handlers
  const addNote = event => {
  event.preventDefault()
  const noteObject = {
    content: name,
    date: new Date(),
    important: Math.random() < 0.5,
  }
//  noteService.create(noteObject).then(console.log(noteObject))
 datas.push(noteObject)
 console.log(datas);
}
  // onChanges
  const onChSearch = (e) => {
    setSearch(e.target.value)
  }
  
  const onChName = (e) => {
    setName(e.target.value)
  }
  const onChNumber = (e) => {
    setNumber(e.target.value)
  }

  // Fetching Datas
  useEffect(() => {
        noteService.getAll()
        .then((res)=>{
          setDatas(res.data)
        })
        .catch((error)=>{
          console.log(error);
        })
        
        setIsLoading(false)
        console.log(`Loading is ${isLoading}`);
  }, []);
  
  // Delete handler
  const deleteHandler = (id) => {
    const person = datas.find(n => n.id === id)
    const Id= person.id
    console.log(Id);

    noteService
      .deletePerson(Id, person)
      .then(res=>{
        // console.log(res);
        setDatas(datas.map(data=>data.id !== id ? data : res.data))
      })
      .catch(error=>console.error(error))
  };
  

  
if (isLoading === true) {
  return(
    <h1>Loading</h1>
  )
}else{
  return(
    <>
      <h1>Phonebook</h1>
      <Search search={search} handler={onChSearch} />
      <SearchedNotes toShow={toShow} />
      <AddNew name={name} number={number} formHandler={addNote} nameHandler={onChName} numberHandler={onChNumber}  />
      <Numbers datas={datas} deleteHandler={deleteHandler}/>
    </>
  )
}
  
}
export default App;

const Search = (props) => {
  return(
    <label htmlFor="search">Filter: <input type="text" name="search" id="search" value={props.search} onChange={props.handler} /></label>
  )
}

const SearchedNotes = ({toShow}) => {
  
  return(
    <>
      <h2>Searched notes</h2>
      <p>{toShow}</p>
    </>
  )
}

const AddNew = (props) => {
  return(
    <>
      <h2>Add a new Person</h2>
      <form onSubmit={props.formHandler} >
        <label htmlFor="name">Name: <input type="text" name="name" id="name" value={props.name} onChange={props.nameHandler} /></label>
        <br />
        <label htmlFor="number">Number: <input type="number" name="number" id="number" value={props.number} onChange={props.numberHandler} /></label>
        <br />
        <br />
        <button type="submit">add</button>
      </form>
    </>
  )
}

const Numbers = ({datas, deleteHandler}) => {
  return(
    <>
      <h2>Numbers</h2>
      {
        datas.length === 0 ? <h4><i>Sorry for now, there might be an issue with server</i></h4> : datas.map(data=>{
        return(
          <Note key={data.id} id={data.id} name={data.name} number={data.number} deleteHandler
          ={deleteHandler} />
        )
      })
      }

    </>
  )
}

const Note = (props) => {
  return(
    <ul style={{listStyle:"none"}}>
      <li>{props.name}</li>
      <li>{props.number}</li>
      <button type="reset" className="btn btn-primary" onClick={()=>
      {
        if(window.confirm(`Do you want to delete ${props.name} permanently?`)){
          props.deleteHandler(props.id)

        }}
      
    }
       >delete</button>
    </ul>
  );
 
};

// const Notification = ({ message }) => {
//   if (message === null) {
//     return null
//   }

//   return (
//     <div className='error'>
//       {message}
//     </div>
//   )
// }