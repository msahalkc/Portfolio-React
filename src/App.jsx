// App.jsx
// import './App.css'
import "./index.css";
import Navbar from "./components/Navbar";
import Landing from './components/Landing'
import Works from "./components/Works";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Landing />
        <Works />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
