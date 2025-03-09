import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { useState } from "react";
import LightLogo from "../assets/kc designs white logo.svg";
import DarkLogo from "../assets/kc designs dark logo.svg";
import ThemeSwitch from "./ThemeSwitch";

const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const menuItems = [
    { name: "Works", href: "/#Works" },
    { name: "Experience", href: "/#Experience" },
    { name: "Tools", href: "/dns-lookup-tools" },
    { name: "Blog", href: "/#Blog" },
    { name: "About", href: "/#About" },
    { name: "Contact", href: "/#Contact" },
  ];

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsMenuOpen(false);
  };

  return (
    <NextUINavbar
      onMenuOpenChange={setIsMenuOpen}
      className="dark:text-emerald-50 bg-transparent sm:px-10 sm:py-5 px-3 py-3"
      position="sticky"
      maxWidth="full"
    >
      <NavbarContent className="gap-2" justify="start">
        <Link href="/" className="flex items-center gap-2">
          <img src={LightLogo} width="60px" alt="KC Designs Logo" className="hidden dark:block" />
          <img src={DarkLogo} width="60px" alt="KC Designs Logo" className="dark:hidden" />
          <NavbarBrand className="flex flex-col items-start font-[Kanit] text-lg">
            <p className="font-normal text-black dark:text-white">muhammed</p>
            <p className="font-bold text-black dark:text-white">sahal kc</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex gap-4">
        <ThemeSwitch />
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`transition-colors
              ${activeLink === item.href ? 'text-blueee-500 dark:text-emerald-500' : 'text-blaq-1000 dark:text-emerald-50'}
              hover:text-blueee-500 dark:hover:text-emerald-500`}
            onClick={() => handleLinkClick(item.href)}
          >
            {item.name}
          </Link>
        ))}
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle 
          className="text-2xl"
          icon={(isOpen) => (
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          )}
        />
      </NavbarContent>

      <NavbarMenu className="pt-16 bg-graay-500/95 dark:bg-blaq-1000/95 backdrop-blur-md sm:hidden">
        <div className="flex flex-col items-start h-full gap-6 px-6">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link
                href={item.href}
                className={`text-2xl sm:text-5xl transition-colors
                  ${activeLink === item.href ? 'text-blue-500 dark:text-emerald-500' : 'text-blaq-1000 dark:text-emerald-50'}
                  after:content-[''] after:absolute after:w-0 after:h-[5px] after:bottom-[-5px] after:left-0 
                  after:bg-blueee-500 dark:after:bg-emerald-500 after:transition-all relative
                  hover:after:w-full hover:text-blueee-500 dark:hover:text-emerald-500`}
                onClick={() => handleLinkClick(item.href)}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default CustomNavbar;
