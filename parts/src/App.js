import { useState } from 'react';
import Notes from './Components/Notes'
import './App.css';

function App({ notes }) {

  const [note, setnote] = useState(notes)
   const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Notes key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input />
        <button type="submit">save</button>
      </form>   
    </div>

  );
}

export default App;
