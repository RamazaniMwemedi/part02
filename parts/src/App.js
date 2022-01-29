import React, {useState, useEffect} from 'react';
import axios from 'axios'
function App () {

  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState(Number()); 
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Form Handlers
  const addNew = (e) => {
    e.preventDefault()
    setName('')
    setNumber(Number())
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
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  // Fetching Datas
  useEffect(() => {
    axios
        .get("http://localhost:4000/persons")
        .then((res)=>{
          console.log(res.data);
        })
        .catch((error)=>{
          console.log(error);
        })
        setTimeout(() => {
          setIsLoading(false)
        }, 5000);
        console.log(`Loading is ${isLoading}`);
  }, []);
  
if (isLoading === true) {
  return(
    <h1>Loading</h1>
  )
}else{
  return(
    <>
      <h1>Phonebook</h1>
      <Search search={search} handler={onChSearch} />
      <AddNew name={name} number={number} password={password} htmlForm={addNew} nameHandler={onChName} numberHandler={onChNumber} onChangePassword={onChangePassword} />
      <Numbers  />
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

const AddNew = (props) => {
  return(
    <>
      <h2>Add a new</h2>
      <form onSubmit={props.htmlFor} >
        <label htmlFor="name">Name: <input type="text" name="name" id="name" value={props.name} onChange={props.nameHandler} /></label>
        <br />
        <label htmlFor="number">Number: <input type="number" name="number" id="number" value={props.number} onChange={props.numberHandler} /></label>
        <br />
        <label htmlFor="password">Password: <input type="password"  value={props.password} onChange={props.onChangePassword} /></label>
        <br />
        <button type="submit">add</button>
      </form>
    </>
  )
}

const Numbers = (props) => {
  return(
    <>
      <h2>Numbers</h2>
    </>
  )
}