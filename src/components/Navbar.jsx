import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
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
  return (
    <NextUINavbar
      onMenuOpenChange={setIsMenuOpen}
      className="dark:text-emerald-50 bg-transparent sm:px-10 sm:py-5 px-3 py-3"
      position="sticky"
      maxWidth="full"
    >
      <NavbarContent className="gap-2" justify="start">
        <img src={LightLogo} width="60px" alt="KC Designs Logo" className="hidden dark:block" />
        <img src={DarkLogo} width="60px" alt="KC Designs Logo" className="dark:hidden" />
        <NavbarBrand className="flex flex-col items-start font-[Kanit] text-lg">
          <p className="font-normal">muhammed</p>
          <p className="font-bold">sahal kc</p>
        </NavbarBrand>
        <NavbarItem className="sm:hidden">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem className="hidden sm:block">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <Link href="#Works" className="dark:hover:text-emerald-500 dark:text-emerald-50 text-blaq-1000 hover:text-blueee-500">
            Works
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#About" className="dark:hover:text-emerald-500 dark:text-emerald-50 text-blaq-1000 hover:text-blueee-500">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#Contact" className="dark:hover:text-emerald-500 dark:text-emerald-50 text-blaq-1000 hover:text-blueee-500">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-16 pl-10 bg-transparent">
        <NavbarMenuItem>
          <Link
            href="#Works"
            className="dark:hover:text-emerald-500 dark:text-emerald-50 text-blaq-1000 hover:text-blueee-500 text-lg"
          >
            Works
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="#About"
            className="dark:hover:text-emerald-500 dark:text-emerald-50 text-blaq-1000 hover:text-blueee-500 text-lg"
          >
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="#Contact"
            className="dark:hover:text-emerald-500 dark:text-emerald-50 text-blaq-1000 hover:text-blueee-500 text-lg"
          >
            Contact
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default CustomNavbar;
