import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const useISTClock = () => {
  const [now, setNow] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return now;
};

const CustomNavbar = () => {
  const time = useISTClock();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="px-6 sm:px-12 py-4 border-b border-black flex items-center justify-between gap-4 sticky top-0 bg-cream/90 backdrop-blur-sm z-50"
    >
      <div className="flex items-center gap-3 sm:gap-5 min-w-0">
        <Link
          to="/"
          className="font-display text-base sm:text-xl tracking-tightest truncate"
        >
          Muhammed Sahal K C
        </Link>
        <span className="hidden sm:flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] border-l border-black pl-4">
          <span className="pulse-dot w-2 h-2 rounded-full bg-black" />
          Available
        </span>
      </div>
      <div className="flex items-center gap-3 sm:gap-6 text-xs uppercase tracking-[0.2em]">
        <a href="/#Wall" className="link-grow hidden sm:inline">
          The Wall
        </a>
        <Link to="/dns-lookup-tools" className="link-grow">
          Tools
        </Link>
        <span className="hidden md:inline font-mono tabular-nums opacity-70 normal-case">
          {time} IST
        </span>
      </div>
    </motion.nav>
  );
};

export default CustomNavbar;
