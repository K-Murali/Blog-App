import React, { useContext, useEffect, useState } from "react";
import { noteContext } from "../context/notes/NoteState";
import Modalbox from "./Modalbox";
const Noteitem = (props) => {

  const {flag, setalert,setmessage,deletenote, editnote } = useContext(noteContext);
  const [newnote, setnewnote] = useState({title:"",description:"",tag:""});

  const handledelete = () => {
    deletenote(props.id);
  }


  const handleclick = (e) => {
    e.preventDefault();
    
    document.getElementById(`my_modal_${props.id}`).showModal();
    // passing id is really important as you have to tell it which box it should open

  }
  const handleedit = (e) => {
    e.preventDefault();
    editnote(props.id, newnote.title, newnote.description, newnote.tag); 
  };
  
  const onchange=(e)=>{
    setnewnote({...newnote,[e.target.name]:e.target.value});
   }

 

  return  (
    <div className="flex items-center justify-center">
      <div className="card w-4/6 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="card-title">{props.title}</h1>
          <p>{props.description}</p>
          <div className="card-actions  ">
            <button className=" hover:bg-success   border-success  border-2  rounded  w-fit  h-auto p-1 mb-5 from-zinc-50">
              {props.tag}
            </button>

            <div className="">
              <button onClick={handledelete} className="   ml-2 rounded   border-2    w-fit  h-auto p-1 mb-5 from-zinc-50"><i className="fa-solid  mt-3   fa-lg fa-trash" style={{ color: "#414d62" }}></i></button>
              <button onClick={handleclick} className="  ml-2 rounded   border-2    w-fit  h-auto p-1 mb-5 from-zinc-50"> <i className="fa-solid fa-pen-to-square" style={{ color: "#414d62" }}  ></i></button>

              <dialog id={`my_modal_${props.id}`} className="modal">
             <Modalbox
             key={props.id}
             id={props.id}
             handleedit={handleedit}
             onchange={onchange}
             />
              </dialog>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;