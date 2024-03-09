import React, { useState } from "react";
import { useContext,useEffect } from "react";
import {noteContext} from "../context/notes/NoteState";
import Noteitem from "./Noteitem";
import Alert from './Alert';

const Feed = () => {
  const [newnote, setnewnote] = useState({title:"",description:"",tag:""});
  
  const {notes,alert,setalert,addnote,flag,getnote}=useContext(noteContext);
  
  const handleclick=(e)=>{
    e.preventDefault();
    addnote(newnote);
  }
  const onchange=(e)=>{
   setnewnote({...newnote,[e.target.name]:e.target.value});
  }
  
  setTimeout(() => {
    setalert(false)
  }, 3000);

  useEffect(() => {
    getnote();
  
  }, [flag]);

  return (
    <div className=" flex  flex-col">

      {(alert&&<Alert message="This is deleted"/>) 
       
      }
 
  
    <div className="  items-center flex flex-col   ">  
      {/* making items center */}
        <h1 className="  text-xl  mt-5">Add a Note </h1>

        <form className="mb-2.5  w-4/6 container  flex flex-col items-center justify-center " action="">

            <label className="form-control   w-full"> <span className="label-text flex flex-col ">  <h1 className="  text-lg m-2 ">Title</h1></span></label>
              <input name='title' onChange={onchange}  type="text" placeholder="Type here"  className="input  input-bordered input-success w-full"/>
      
            <label className="form-control   w-full"> <span className="label-text flex flex-col ">  <h1 className="  text-lg m-2 ">Description</h1></span></label>
              <input name='description'  onChange={onchange} type="text" placeholder="Type here"  className="input  input-bordered input-success w-full"/>
      
            <label className="form-control   w-full"> <span className="label-text flex flex-col ">  <h1 className="  text-lg m-2 ">Tag</h1></span></label>
              <input name='tag' onChange={onchange}  type="text" placeholder="Type here"  className="input mb-5  input-bordered input-success w-full"/>
              <button className=" hover:bg-white hover: border-info  border-2  bg-info rounded w-2/12  h-auto p-1 mb-5 from-zinc-50" onClick={handleclick}>Submit</button>
        </form>

    </div>
    <div className=" items-center flex flex-col" >
        <h1 className="  text-xl m-2 ">Your notes</h1>
        <div className="flex flex-wrap items-center justify-center gap-4 ">
          
        {flag&&notes&&notes.map((ele,i=0)=>{
          const {title,description,tag,_id}=ele;
          return notes&& (
            <Noteitem  id={_id} title={title} key={i++} description={description} tag={tag} />
            )
          })}
        </div>

    </div>
 </div>
  );
};

export default Feed;
