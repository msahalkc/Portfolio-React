import { useState } from "react";
import "./index.css";

import Landing from "./components/Landing";
import Works from "./components/Works";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Marquee from "./components/Marquee";
import Poster from "./components/Poster";
import PosterModal from "./components/PosterModal";

const POSTERS = [
  {
    id: "works",
    title: "Works",
    subtitle: "Selected projects, shipped and lived in.",
    meta: "Folio",
    tilt: -1.2,
    span: "",
    component: <Works />,
  },
  {
    id: "experience",
    title: "Experience",
    subtitle: "Where I have left fingerprints.",
    meta: "Career",
    tilt: 1.5,
    span: "",
    component: <Experience />,
  },
  {
    id: "blog",
    title: "Blog",
    subtitle: "Notes from the keyboard.",
    meta: "Writing",
    tilt: -0.8,
    span: "",
    component: <Blog />,
  },
  {
    id: "about",
    title: "About",
    subtitle: "A short, honest introduction.",
    meta: "Profile",
    tilt: 0.7,
    span: "",
    component: <About />,
  },
  {
    id: "contact",
    title: "Contact",
    subtitle: "Send a brief, a hello, anything.",
    meta: "Say Hi",
    tilt: -0.5,
    span: "md:col-span-2 md:aspect-auto",
    component: <Contact />,
  },
];

const App = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const openPoster = openIndex !== null ? POSTERS[openIndex] : null;

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
      <section className="p-10 sm:px-24 lg:px-32 pt-16 pb-20" id="Wall">
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] opacity-70 mb-2">
              The Wall
            </p>
            <h2 className="font-display text-4xl sm:text-6xl tracking-tightest leading-none">
              Five posters. <span className="italic">Tap to read.</span>
            </h2>
          </div>
          <p className="text-sm italic max-w-sm">
            Each poster is a doorway. Pick one and the items behind it open up.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {POSTERS.map((p, i) => (
            <Poster
              key={p.id}
              index={i}
              title={p.title}
              subtitle={p.subtitle}
              meta={p.meta}
              tilt={p.tilt}
              span={p.span}
              onClick={() => setOpenIndex(i)}
            />
          ))}
        </div>
      </section>
      <Marquee duration={36} reverse className="crosshatch">
        <span className="italic">Available for new projects</span>
        <span className="mx-4 spin-slower inline-block">✱</span>
        <span>Let&apos;s build something</span>
        <span className="mx-4 spin-slower inline-block">✱</span>
      </Marquee>
      <footer className="px-10 sm:px-24 py-10 flex items-center justify-between text-xs uppercase tracking-[0.25em]">
        <span>© Muhammed Sahal K C · 2026</span>
        <span className="flex items-center gap-2">
          <span className="spin-slow inline-block">✱</span>
          Made with Inter &amp; Fraunces
        </span>
      </footer>
      <PosterModal
        open={openPoster !== null}
        title={openPoster?.title}
        onClose={() => setOpenIndex(null)}
      >
        {openPoster?.component}
      </PosterModal>
    </div>
  );
};

export default App;
