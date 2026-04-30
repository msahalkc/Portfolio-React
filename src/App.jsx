import "./index.css";

import Landing from "./components/Landing";
import Works from "./components/Works";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Marquee from "./components/Marquee";

const App = () => {
  return (
    <div>
      <Landing />
      <Marquee duration={32}>
        <span>Muhammed Sahal K C</span>
        <span className="mx-4 spin-slower inline-block">✱</span>
        <span className="italic">Portfolio</span>
        <span className="mx-4 spin-slower inline-block">✱</span>
        <span>2026</span>
        <span className="mx-4 spin-slower inline-block">✱</span>
      </Marquee>
      <Works />
      <Experience />
      <Blog />
      <About />
      <Marquee duration={36} reverse>
        <span className="italic">Available for new projects</span>
        <span className="mx-4 spin-slower inline-block">✱</span>
        <span>Let&apos;s build something</span>
        <span className="mx-4 spin-slower inline-block">✱</span>
      </Marquee>
      <Contact />
    </div>
  );
};

export default App;
