// App.jsx
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MainText from "./components/MainText";
import SubTexts from './components/SubTexts'
import RoundedRectangle from "./components/RoundedRectangle";
import Works from './components/Works'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="textContainer mx-5">
        <MainText />
        <SubTexts />
      </div>
      <RoundedRectangle />
      <Works />
    </div>
  )
}

export default App
