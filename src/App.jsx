import { useState } from "react";
import "./index.css";

import Landing from "./components/Landing";
import Works from "./components/Works";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Poster from "./components/Poster";
import PosterModal from "./components/PosterModal";

const POSTERS = [
  {
    id: "works",
    title: "Works",
    subtitle: "Selected projects, shipped and lived in.",
    meta: "Folio",
    tilt: -1.2,
    component: <Works />,
  },
  {
    id: "experience",
    title: "Experience",
    subtitle: "Where I have left fingerprints.",
    meta: "Career",
    tilt: 1.5,
    component: <Experience />,
  },
  {
    id: "blog",
    title: "Blog",
    subtitle: "Notes from the keyboard.",
    meta: "Writing",
    tilt: -0.8,
    component: <Blog />,
  },
  {
    id: "about",
    title: "About",
    subtitle: "A short, honest introduction.",
    meta: "Profile",
    tilt: 0.7,
    component: <About />,
  },
  {
    id: "contact",
    title: "Contact",
    subtitle: "Send a brief, a hello.",
    meta: "Say Hi",
    tilt: -0.5,
    component: <Contact />,
  },
];

const App = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const openPoster = openIndex !== null ? POSTERS[openIndex] : null;

  return (
    <div className="h-[calc(100vh-65px)] overflow-hidden flex flex-col">
      <Landing />
      <section
        className="flex-1 min-h-0 px-6 sm:px-12 lg:px-20 pb-6 flex flex-col"
        id="Wall"
      >
        <div className="flex items-end justify-between mb-3 gap-4 flex-wrap">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] opacity-70 mb-1">
              The Wall
            </p>
            <h2 className="font-display text-2xl sm:text-3xl tracking-tightest leading-none">
              Five posters. <span className="italic">Tap to read.</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 flex-1 min-h-0">
          {POSTERS.map((p, i) => (
            <Poster
              key={p.id}
              index={i}
              title={p.title}
              subtitle={p.subtitle}
              meta={p.meta}
              tilt={p.tilt}
              aspectClass="h-full"
              paddingClass="p-3 sm:p-4"
              onClick={() => setOpenIndex(i)}
            />
          ))}
        </div>
      </section>
      <PosterModal
        open={openPoster !== null}
        index={openIndex}
        title={openPoster?.title}
        subtitle={openPoster?.subtitle}
        meta={openPoster?.meta}
        onClose={() => setOpenIndex(null)}
      >
        {openPoster?.component}
      </PosterModal>
    </div>
  );
};

export default App;
