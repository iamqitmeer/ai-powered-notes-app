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
      {/* Left: Logo */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-white"
        />
      </NavbarContent>

      <NavbarContent justify="start" className="hidden sm:flex">
        <NavbarBrand className="mr-10">
          <p className="font-bold text-white text-lg">ACME</p>
        </NavbarBrand>
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-gray-200 font-medium"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Center: Nav Links */}
      {/* <NavbarContent className="hidden sm:flex gap-6" justify="start">
      </NavbarContent> */}

      {/* Right: Login and Sign-Up Button */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="text-white hover:text-gray-300">
            Login
          </Link>
        </NavbarItem>
        <div className="w-[2px] h-8 bg-gray-800"></div>
        <NavbarItem>
          <Button as={Link} className="bg-purple-400 text-white" variant="flat">
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Responsive Mobile Menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-white"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={`#${item.toLowerCase()}`}
              size="lg"
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
