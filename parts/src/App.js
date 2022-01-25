import React, {useState, useEffect} from 'react';
import axios from 'axios'
function App() {
  const [newNote, setNewNote]= useState('')
  const [name, setName]= useState('')
  const [age, setAge]=useState('')
  const [lang, setLang]= useState('')
  const [details, setDetails] = useState([])

  const formHandler=(e)=>{
    e.preventDefault()
    const noteObject = {
    content: newNote,
    name: name,
    age: age,
    lang:lang,
    date: new Date(),
    important: Math.random() < 0.5,
  }

  axios
    .post('http://localhost:4000/users', noteObject)
    .then(response => {
      console.log(response)
      setDetails(response.data)
    }).catch((error)=>{
      console.log(error);
    })
    setNewNote("")
    setName('')
    setAge('')
    setLang('')
  }

  const onChangeH=(e)=>{
    setNewNote(e.target.value)
  }
  const onChangeHN=(e)=>{
    setName(e.target.value)
  }
  const onChangeHA=(e)=>{
    setAge(e.target.value)
  }
  const onChangeHL=(e)=>{
    setLang(e.target.value)
  }

  return <>
    <h1>App </h1>
    <Form newNote={newNote} name={name} age={age} lang={lang} formHandler={formHandler} onChangeH={onChangeH} onChangeHN={onChangeHN} onChangeHA={onChangeHA} onChangeHL={onChangeHL} />
    <br />
    <Details details={details} />
  </>;
}

export default App;

const Form = (props) => {
  return(
    <form action="POST" onSubmit={props.formHandler} >
      <label>
        note: <input type="text" value={props.newNote} onChange={props.onChangeH} />
      </label>
      <br />
      <label>
        name: <input type="text" value={props.name} onChange={props.onChangeHN} />
      </label>
      <br />
      <label>
        age: <input type="text" value={props.age} onChange={props.onChangeHA} />
      </label>
      <br />
      <label>
        language: <input type="text" value={props.lang} onChange={props.onChangeHL} />
      </label>
      <br />
      <button type="submit"> Add New Note</button>
    </form>
  )
}

const Details = (props) => {
  const[persons, setPersons]= useState('')
  useEffect(() => {
    axios
        .get('http://localhost:4000/notes')
        .then((res)=>{
          setPersons(res.data)
        })
  },[]);
  console.log(`Datas are ${persons.length}`);

  return(
    <>
      <h2>Details</h2>
      {persons.map((person)=>{
        // const{content, id}= person;
        return
      })}
    </>
  )
}