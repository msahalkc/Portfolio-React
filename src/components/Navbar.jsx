import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      className="px-10 sm:px-48 py-6 border-b border-black flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sticky top-0 bg-cream/90 backdrop-blur-sm z-50"
    >
      <Link to="/" className="font-display text-xl tracking-tightest">
        Muhammed Sahal K C
      </Link>
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
        } sm:flex flex-col sm:flex-row gap-3 sm:gap-7 text-sm uppercase tracking-wider`}
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
    </motion.nav>
  );
};

export default CustomNavbar;
