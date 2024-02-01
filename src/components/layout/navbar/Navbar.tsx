import { NavLink } from "react-router-dom";
import { Logo } from ".";
import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="text-lg">
      <nav className="flex justify-between items-center px-6 py-4">
        <Logo />

        <div className="flex items-center gap-5">
          <NavLink to="/" end>
            <li>Home</li>
          </NavLink>
          <NavLink to="/recipes">
            <li> Categories</li>
          </NavLink>
          <NavLink to="/featured">
            <li> Featured</li>
          </NavLink>
          {/* <DropDownMenu /> */}
        </div>

        <div className="flex gap-5">
          <Input type="search" placeholder="Search for recipe" className="text-base" />
        </div>

        <div className="flex gap-5">
          <NavLink to="/cart">
            <li>
              <ShoppingCart />
            </li>
          </NavLink>
          <NavLink to="/account">
            <li> Account</li>
          </NavLink>

          <li> Language</li>

          {/* <DropDownMenu /> */}
        </div>

        {/* <div><ModeToggle /></div> */}
        {/* <div><Hamburger /></div> */}

        <div className="flex items-center  gap-5">
          <NavLink to="/about-us">
            <li> About Us</li>
          </NavLink>
          <NavLink to="mailto:kendrickoppong94@gmail.com">
            Contact
            {/* <ButtonNavLink>
            </ButtonNavLink> */}
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
