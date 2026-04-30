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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const time = useISTClock();

  const menuItems = [
    { name: "Works", href: "/#Works" },
    { name: "Experience", href: "/#Experience" },
    { name: "Tools", href: "/dns-lookup-tools" },
    { name: "Blog", href: "/#Blog" },
    { name: "About", href: "/#About" },
    { name: "Contact", href: "/#Contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="px-6 sm:px-12 py-4 border-b border-black flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sticky top-0 bg-cream/90 backdrop-blur-sm z-50"
    >
      <div className="flex items-center gap-3 sm:gap-5">
        <Link
          to="/"
          className="font-display text-lg sm:text-xl tracking-tightest"
        >
          Muhammed Sahal K C
        </Link>
        <span className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-[0.2em] border-l border-black pl-4">
          <span className="pulse-dot w-2 h-2 rounded-full bg-black" />
          Available
        </span>
      </div>
      <div className="flex items-center justify-between sm:justify-end sm:gap-7">
        <button
          type="button"
          className="sm:hidden link-underline w-fit text-sm uppercase tracking-wider"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm uppercase tracking-wider`}
        >
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="link-grow"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <span className="hidden md:inline text-sm font-mono tabular-nums opacity-70">
          {time} IST
        </span>
      </div>
    </motion.nav>
  );
};

export default CustomNavbar;
