import { useState } from 'react';
import Notes from './Components/Notes'
import './App.css';

function App({ notes }) {

  const [note, setNote] = useState(notes)
  const [newNote, setNewNote] = useState(' ')

  const addNote = (event) => {
  event.preventDefault()
  const noteObject = {
    content: newNote,
    date: new Date().toISOString(),
    important: Math.random() < 0.5,
    id: notes.length + 1,
  }

  setNote(notes.concat(noteObject))
  setNewNote('')
}

    const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }


  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Notes key={note.id} note={note}  />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit"  >save</button>
      </form>   
    </div>

  );
}

export default App;
