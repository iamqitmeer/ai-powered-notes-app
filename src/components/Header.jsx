import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Button, Link } from "@nextui-org/react";
import "./header.css"

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
          <p className="font-bold text-white text-lg">ACME</p>
        </NavbarBrand>
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-gray-200 font-medium transition duration-300"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right: Login and Sign-Up Button */}
      <NavbarContent justify="end" className="flex items-center">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="text-white hover:text-gray-300 transition duration-300">
            Login
          </Link>
        </NavbarItem>
        <div className="w-[2px] h-8 bg-gray-800 mx-3 hidden lg:block"></div>
        <NavbarItem>
          <Button as={Link} className="bg-purple-500 text-white hover:bg-purple-600 transition duration-300" variant="flat">
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Responsive Mobile Menu */}
      <NavbarMenu className="sm:hidden bg-gray-70">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-white py-1 block text-lg transition duration-300"
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
