import React, { createContext, useState } from "react";
import { fetchdata } from "../../utils/api";
export const noteContext = createContext();

const NoteState = (props) => {

  const [notes, setnotes] = useState(null);
  const [flag, setflag] = useState(true);
  const [alert, setalert] = useState(true);
  const [message, setmessage] = useState("welcome");

  // add a note
  const addnote = async (newnote) => {  
    const { title, description, tag } = newnote;
   setflag(false);
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlNWE5ODZjNjhlY2Y1YzQ0NmFhYWI2In0sImlhdCI6MTcwOTU1NDY5OH0.sGzZgCOB2-npc1Fo8Rn6hn-tI9CiT3oZvwFNcN0LnI8"
      },
      body: JSON.stringify({ title, description, tag }),
    }
    const res = await fetch("http://localhost:5000/api/notes/addnote", options);
    const allnote = await res.json();
    setflag(true);
    setnotes(notes.concat(newnote));
    console.log("added",allnote);
    setalert(true);
    setmessage("New Notes added...")
  }


  const getnote = async () => {
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlNWE5ODZjNjhlY2Y1YzQ0NmFhYWI2In0sImlhdCI6MTcwOTU1NDY5OH0.sGzZgCOB2-npc1Fo8Rn6hn-tI9CiT3oZvwFNcN0LnI8",
      }
    }
    const base_url = "http://localhost:5000/api/notes/fetchnotes";

    const res = await fetch(base_url, options);
    const allnote = await res.json();
    console.log("all notes: ",allnote)
    setnotes(allnote);
    setflag(true);
  }


  // delete a note
  const deletenote =async (id) => {

    setflag(false);

    const options={
      method:'DELETE',
      headers:{
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlNWE5ODZjNjhlY2Y1YzQ0NmFhYWI2In0sImlhdCI6MTcwOTU1NDY5OH0.sGzZgCOB2-npc1Fo8Rn6hn-tI9CiT3oZvwFNcN0LnI8",
      }
    }
    const base_url=`http://localhost:5000/api/notes/deletenote/${id}`;
    const res =  await fetch(base_url,options);
    const newnote=notes.filter(note=>note._id!==id)
    setnotes(newnote);
    setflag(true);
    setalert(true);
    setmessage("Deleted...")
  }

  const editnote = async(id, title, description, tag) => {
      setflag(false)
    for(let i=0;i<notes.length;i++){
      
      if(notes._id===id){
        notes[i].title=title;
        notes[i].description=description;
        notes[i].tag=tag;
      }
    }
    const options={
      method:'PUT',
      headers:{
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlNWE5ODZjNjhlY2Y1YzQ0NmFhYWI2In0sImlhdCI6MTcwOTU1NDY5OH0.sGzZgCOB2-npc1Fo8Rn6hn-tI9CiT3oZvwFNcN0LnI8",
      },
      body:JSON.stringify({title,description,tag}),
    }
    const base_url=`http://localhost:5000/api/notes/updatenote/${id}`;
    await fetch(base_url,options);
    setflag(true)
    setalert(true);
    setmessage("Changes Updated...")
 

  }



  return (
    <noteContext.Provider
      value={{
        notes,
        setnotes,
        addnote,
        deletenote,
        getnote,
        editnote,
        flag,
        setflag,
        alert,setalert,
        message,setmessage,

      }}
    >
      {props.children}
    </noteContext.Provider>
  );
};
export default NoteState;
