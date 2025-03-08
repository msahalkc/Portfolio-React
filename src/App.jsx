// App.jsx
// import './App.css'
import "./index.css";
import './fonts/Fonts.css';

import Navbar from "./components/Navbar";
import Landing from './components/Landing'
import Works from "./components/Works";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Landing />
        <Works />
        <Experience />
        <Blog />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
