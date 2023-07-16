import NotesList from "./components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2023",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "20/04/2023",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "22/04/2023",
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "30/04/2023",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    // this function accept id for delete a note
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className="container">
      <NotesList 
      notes={notes}
      handleAddNote={addNote} 
      handleDeleteNode = {deleteNote}
      />
    </div>
  );
};

export default App;
