import React from 'react'
import { useState,useContext,useEffect } from 'react';
import { noteContext, } from '../context/notes/NoteState';
import Alert from './Alert';
import background from '../utils/bg8.jpeg'

const Formnote = () => {
    const [newnote, setnewnote] = useState({ title: "", description: "", tag: "" });
    const {  alert,setalert,addnote,flag,getnote} = useContext(noteContext);

    useEffect(() => {
      getnote();
    }, [flag]);
 
    setTimeout(() => {
      setalert(false)
    }, 9000);

  const handleclick = (e) => {
    e.preventDefault();
    console.log(newnote)
    addnote(newnote);
  }
  const onchange = (e) => {
    setnewnote({ ...newnote, [e.target.name]: e.target.value });
  }
  
  
  return (
    <>
{/* style={{ backgroundImage: `url(${background})` }} */}
     {(alert && <Alert message="This is deleted" />)} 
      <div className="bg-scroll bg-cover" >
      <div className="  items-center justify-center  h-dvh flex flex-col   ">
        {/* making items center */}
        <h1 className=" mt-5 text-3xl ">Add Something </h1>
        <form className="mb-2.5  w-4/6 container  flex flex-col items-center justify-center " action="">

          <label className="form-control   w-full"> <span className="label-text flex flex-col ">  <h1 className="  text-lg m-2 ">Title</h1></span></label>
          <input minLength={3} required  name='title' onChange={onchange} type="text" placeholder="enter here..." className="input  input-bordered input-info w-full" />

          <label className="form-control   w-full"> <span className="label-text flex flex-col ">  <h1 className="  text-lg m-2 ">Description</h1></span></label>
          <textarea  minLength={5} required name='description' rows='5' onChange={onchange} type="text" placeholder="enter here..." className="input p-2  input-bordered   input-info border-5 h-9/12 w-full" />

          <label className="form-control   w-full"> <span className="label-text flex flex-col ">  <h1 className="  text-lg m-2 ">Tag</h1></span></label>
          <input name='tag' onChange={onchange} type="text" placeholder="enter here..." className="input mb-5  input-bordered input-info w-full" />
          <button disabled={newnote.title.length<3||newnote.description.length<5} className=" text-white hover:bg-white hover:text-success hover: border-info mt-2  border-2  bg-success rounded     w-20  h-auto p-1 mb-5 from-zinc-50" onClick={handleclick}>Post</button>
        </form>
      </div>
     </div>
    </>
  )
}

export default Formnote
