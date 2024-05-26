import { NavLink, useNavigate } from "react-router-dom";
import {
  AllRecipesDropDownLinks,
  Logo,
  HamburgerMenu,
  UserProfileMenuDropDown,
  SearchBar,
} from ".";
import { ModeToggle } from "@/context/theme";
import { ShoppingBasket, Search } from "lucide-react";
import { useAppSelector } from "@/redux/store";
import { getAllCartData } from "@/redux/cartSlice";
import { useEffect, useState } from "react";
import { usePost as useSignOut } from "@/hooks";

export const Navbar = () => {
  const storedAuthState = localStorage.getItem("isAuthenticated") as string;
  const isAuthenticated = JSON.parse(storedAuthState);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const cartLength = useAppSelector(getAllCartData)?.length;

  const navigate = useNavigate();
  const {
    isSuccess,
    error: signOutError,
    isError: isSignOutError,
    mutate: signOutMutation,
  } = useSignOut("/user/signout");

  if (isSignOutError) console.log(signOutError?.message);

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("isAuthenticated", JSON.stringify(false));
    }
  }, [isSuccess, navigate]);

  const handleSignOut = () => {
    signOutMutation(undefined);
    navigate("/");
    localStorage.setItem("isAuthenticated", JSON.stringify(false));
  };

  return (
    <>
      <header className="text-lg z-[10001]">
        <nav className="flex items-center justify-between px-3 py-4 shadow-lg dark:on-dark-shadow">
          <Logo />
          <div className="flex items-center gap-5">
            <NavLink to="/" end className=" max-[820px]:hidden">
              <li>Home</li>
            </NavLink>
            <div className="dropDownLinksMediaQuery">
              <AllRecipesDropDownLinks />
            </div>
            <NavLink to="/shop">
              <li className="relative">
                {" "}
                Shop{" "}
                <span className="hidden md:inline-flex absolute w-3 h-3 rounded-full -right-6 top-1 animate-pulse bg-destructive"></span>
              </li>
            </NavLink>
          </div>

          <div className="flex gap-5 cursor-pointer">
            <Search onClick={() => setShowSearchBar((prev) => !prev)} />
          </div>

          <div className="flex items-center gap-5">
            {isAuthenticated ? (
              <li className="cursor-pointer" onClick={handleSignOut}>
                Sign Out
              </li>
            ) : (
              <NavLink to="/signin" className="max-[820px]:hidden">
                <li> Sign In</li>
              </NavLink>
            )}

            <div className="max-[550px]:hidden">
              {isAuthenticated && <UserProfileMenuDropDown />}
            </div>
            <NavLink to="all-menus/cart">
              <li className="relative">
                <ShoppingBasket className="w-7 h-7" />
                {cartLength > 0 && (
                  <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-white rounded-full border-1 -top-3 -end-4 dark:border-gray-900">
                    {cartLength}
                  </div>
                )}
              </li>
            </NavLink>
          </div>

          <div className="max-[550px]:hidden">
            <ModeToggle />
          </div>
          <div className="hidden max-[1000px]:flex">
            <HamburgerMenu />
          </div>

          <div className="flex items-center gap-5 max-[1000px]:hidden">
            <NavLink to="all-menus/about-us">
              <li> About Us</li>
            </NavLink>
            <NavLink to="all-menus/contact-us">
              <li>Contact Us</li>
            </NavLink>
          </div>
        </nav>
        {showSearchBar && <SearchBar setShowSearchBar={setShowSearchBar} />}
      </header>
      {/* create space beneath search bar */}
      {showSearchBar && (
        <div className="w-full h-28 top-28  mb-6 z-[10001] "></div>
      )}
      {!showSearchBar && <div className="w-full h-20 top-28  z-[10001] "></div>}
    </>
  );
};
