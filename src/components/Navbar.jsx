import { useState } from "react";
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
    <nav className="px-10 sm:px-48 py-6 border-b border-black flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <Link to="/" className="font-bold text-xl no-underline">
        Muhammed Sahal K C
      </Link>
      <button
        type="button"
        className="sm:hidden underline w-fit"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "Close menu" : "Open menu"}
      </button>
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row gap-3 sm:gap-6`}
      >
        {menuItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="underline"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CustomNavbar;
