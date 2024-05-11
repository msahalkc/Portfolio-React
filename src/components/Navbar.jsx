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
import Logo from "../assets/kc designs white logo.svg";
import ThemeSwitch from "./ThemeSwitch";

const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <NextUINavbar
      onMenuOpenChange={setIsMenuOpen}
      className="text-[#eee5e0] bg-transparent md:px-10 md:py-5 px-3 py-3"
      position="sticky"
      maxWidth="full"
    >
      <NavbarContent className="" justify="start">
        <img src={Logo} width="60px" alt="KC Designs Logo" />
        <NavbarBrand className="flex flex-col items-start font-[Kanit] text-lg">
          <p className="font-normal">muhammed</p>
          <p className="font-bold">sahal kc</p>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {/* <NavbarItem>
          <ThemeSwitch />
        </NavbarItem> */}
        <NavbarItem>
          <Link href="#Works" className="text-[#eee5e0] hover:text-gray-100">
            Works
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#About" className="text-[#eee5e0] hover:text-gray-100">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#Contact" className="text-[#eee5e0] hover:text-gray-100">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-16 pl-10 bg-transparent">
        <NavbarMenuItem>
          <Link
            href="#Works"
            className="text-[#eee5e0] hover:text-gray-100 text-lg"
          >
            Works
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="#About"
            className="text-[#eee5e0] hover:text-gray-100 text-lg"
          >
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="#Contact"
            className="text-[#eee5e0] hover:text-gray-100 text-lg"
          >
            Contact
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default CustomNavbar;
