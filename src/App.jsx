import "./index.css";

import Landing from "./components/Landing";
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
