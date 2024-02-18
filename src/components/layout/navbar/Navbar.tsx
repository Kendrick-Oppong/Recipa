import { NavLink } from "react-router-dom";
import { AllRecipesDropDownLinks, Logo } from ".";
import { Input } from "@/components/ui/input";
// import { ShoppingBasket, User } from "lucide-react";
import { ModeToggle } from "@/context/theme";

export const Navbar = () => {
  return (
    <header className="text-lg">
      <nav className="flex justify-between items-center px-6 py-4 shadow-lg dark:on-dark-shadow">
        <Logo />

        <div className="flex items-center gap-5">
          <NavLink to="/" end>
            <li>Home</li>
          </NavLink>
          <AllRecipesDropDownLinks />
          <NavLink to="/shop">
            <li> Shop</li>
          </NavLink>
          {/* <DropDownMenu /> */}
        </div>

        <div className="flex gap-5">
          <Input
            type="search"
            placeholder="Search for recipe"
            className="text-lg border-green-600"
          />
        </div>

        <div className="flex gap-5">
          {/* <NavLink to="/cart">
            <li>
              <ShoppingBasket />
            </li>
          </NavLink> */}
          <NavLink to="/signup">
            <li>
              Sign In
              {/* <User /> */}
            </li>
          </NavLink>
          {/* <DropDownMenu /> */}
        </div>

        <div>
          <ModeToggle />
        </div>
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
