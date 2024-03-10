// App.jsx
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MainText from "./components/MainText";
import SubTexts from './components/SubTexts'
import RoundedRectangle from "./components/RoundedRectangle";
import Works from './components/Works'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <div className="subContainer">
          <div className="textContainer mx-sm-5 mx-4">
            <MainText />
            <SubTexts />
          </div>
        <RoundedRectangle />
        </div>
        <Works />
        <About />
        <Contact />
      </div>
    </>
  )
}

export default App
