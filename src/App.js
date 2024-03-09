import React from 'react'
import NoteState from './context/notes/NoteState'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import About from './components/About'
import Feed from './components/Feed';


const App = () => {
  return (
    <>
    <NoteState>
      <Router>
        <div className='  w-screen flex  flex-col  justify-center '>
        <Navbar/>

        <Routes>
          <Route exact path="/about"  element={<About></About>}/>
          <Route exact path="/" element={<Feed/>}/>
          {/* <Route exact path="/video/:id" element={<VideoDetail/>}/> */}
        </Routes> 
        </div>
       

      </Router>
    </NoteState>
    </>
  )
}

export default App
