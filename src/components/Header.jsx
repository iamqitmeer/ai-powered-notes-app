import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Button,
  Link,
} from "@nextui-org/react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "About", "Features", "Templates", "Contact"];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-black text-white"
    >
      {/* Left: Mobile Menu Toggle for small screens */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-white"
        />
      </NavbarContent>

      {/* Left: Logo for larger screens */}
      <NavbarContent justify="start" className="hidden sm:flex">
        <NavbarBrand className="mr-10">
          <p className="text-lg font-bold text-white">ACME</p>
        </NavbarBrand>
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={`#${item.toLowerCase()}`}
              className="font-medium text-white transition duration-300 hover:text-gray-200"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right: Login and Sign-Up Button */}
      <NavbarContent justify="end" className="flex items-center">
        <NavbarItem className="hidden lg:flex">
          <Link
            href="#"
            className="text-white transition duration-300 hover:text-gray-300"
          >
            Login
          </Link>
        </NavbarItem>
        <div className="mx-3 hidden h-8 w-[2px] bg-gray-800 lg:block"></div>
        <NavbarItem>
        <NavLink to="/register">
  <Button className="bg-purple-500 text-white transition duration-300 hover:bg-purple-600" variant="flat">
    Get Started
  </Button>
</NavLink>

        </NavbarItem>
      </NavbarContent>

      {/* Responsive Mobile Menu */}
      <NavbarMenu className="bg-gray-70 sm:hidden">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="block w-full py-1 text-lg text-white transition duration-300"
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
