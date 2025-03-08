// App.jsx
// import './App.css'
import "./index.css";
import './fonts/Fonts.css';
import { DarkMode } from "./components/DarkMode/DarkMode";

import Landing from './components/Landing'
import Works from "./components/Works";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

const App = () => {
  return (
    <div>
        <Landing />
        <Works />
        <Experience />
        <Blog />
        <About />
        <Contact />
      </div>
  );
};

export default App;
