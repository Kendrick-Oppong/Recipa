import { NavLink } from "react-router-dom";
import { AllRecipesDropDownLinks, Logo } from ".";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/context/theme";
import { ShoppingBasket, User } from "lucide-react";
import { useAppSelector } from "@/redux/store";
import { getAllCartData } from "@/redux/cartSlice";

export const Navbar = () => {
  const cartLength = useAppSelector(getAllCartData)?.length;

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

        <div className="flex gap-5 items-center">
          <NavLink to="/signin">
            <li>Sign In</li>
          </NavLink>

          <NavLink to="/profile">
            <li>
              <User />
            </li>
          </NavLink>
          <NavLink to="all-menus/cart">
            <li className="relative">
              <ShoppingBasket className="w-7 h-7" />
              {cartLength > 0 && (
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-1 border-white rounded-full -top-3 -end-4 dark:border-gray-900">
                  {cartLength}
                </div>
              )}
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
          <NavLink to="mailto:kendrickoppong94@gmail.com">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
};
