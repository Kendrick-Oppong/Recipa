import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { AllRecipesDropDownLinks, Logo, UserProfileMenuDropDown } from ".";
import { Link, useNavigate } from "react-router-dom";
import { ModeToggle } from "@/context/theme";
import { getIsAuthenticated } from "@/redux/userAuthenticatedSlice";
import { useAppSelector } from "@/redux/store";
import { useAppDispatch } from "@/redux/store";
import { signOut } from "@/redux/userAuthenticatedSlice";
import { usePost as useSignOut } from "@/hooks";

export const HamburgerMenu = () => {
  const isAuthenticated = useAppSelector(getIsAuthenticated);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    error: signOutError,
    isError: isSignOutError,
    mutate: signOutMutation,
  } = useSignOut("http://localhost:5000/user/signout");

  if (isSignOutError) console.log(signOutError?.message);

  const handleSignOut = () => {
    signOutMutation(undefined);
    dispatch(signOut());
    navigate("/");
  };

  return (
    <Sheet>
      <SheetTrigger className="my-auto">
        <Menu className="my-auto" />
      </SheetTrigger>
      <SheetContent side="left" className="hover:scale-100 z-[10005]">
        <SheetHeader>
          <SheetTitle className="flex justify-between items-center mt-10">
            <Logo />
            <ModeToggle />
          </SheetTitle>
        </SheetHeader>
        <nav className="p-2 border border-green600 rounded-lg">
          <Link to="/">
            <li className="mb-4 p-1 pl-2">Home</li>
          </Link>
          <div className="mb-4 -ml-2">
            <AllRecipesDropDownLinks />
          </div>
          <Link to="/shop">
            <li className="mb-4 p-1 pl-2"> Shop</li>
          </Link>

          {isAuthenticated ? (
            <li className="cursor-pointer ml-2 mb-4" onClick={handleSignOut}>
              {" "}
              Sign Out
            </li>
          ) : (
            <Link to="/signin" className="max-[820px]:hidden">
              <li> Sign In</li>
            </Link>
          )}

          <UserProfileMenuDropDown />

          <Link to="all-menus/about-us">
            <li className="my-4 p-1 pl-2"> About Us</li>
          </Link>
          <Link to="all-menus/contact-us">
            <li className="mb-4 p-1 pl-2">Contact Us</li>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
