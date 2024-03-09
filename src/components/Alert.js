import React, {useContext}from 'react'

import { noteContext } from '../context/notes/NoteState';

const Alert = () => {
  const {message} = useContext(noteContext);
  return (
    <div className='   m-3  items-center  justify-center'>
    <div role="alert" className="alert p-2 "> 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span className='text-lg '>{message}</span>
    {/* <div><button className="btn btn-sm btn-primary">close</button></div> */}
    </div>
  </div>
  
  )
}

export default Alert
