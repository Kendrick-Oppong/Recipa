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
import { usePost as useSignOut } from "@/hooks";
import { useEffect } from "react";

export const HamburgerMenu = () => {
  const storedAuthState = localStorage.getItem("isAuthenticated") as string;
  const isAuthenticated = JSON.parse(storedAuthState);
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
    <Sheet>
      <SheetTrigger className="my-auto">
        <Menu className="my-auto" />
      </SheetTrigger>
      <SheetContent side="left" className="hover:scale-100 z-[10005]">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between mt-10">
            <Logo />
            <ModeToggle />
          </SheetTitle>
        </SheetHeader>
        <nav className="p-2 border rounded-lg border-green600">
          <Link to="/">
            <li className="p-1 pl-2 mb-4">Home</li>
          </Link>
          <div className="mb-4 ml-1">
            <AllRecipesDropDownLinks />
          </div>
          <Link to="/shop">
            <li className="p-1 pl-2 mb-4"> Shop</li>
          </Link>

          {isAuthenticated ? (
            <li className="mb-4 ml-2 cursor-pointer" onClick={handleSignOut}>
              Sign Out
            </li>
          ) : (
            <Link to="/signin" className="max-[820px]:hidden">
              <li> Sign In</li>
            </Link>
          )}

          <div className="ml-1">
            <UserProfileMenuDropDown />
          </div>

          <Link to="all-menus/about-us">
            <li className="p-1 pl-2 my-4"> About Us</li>
          </Link>
          <Link to="all-menus/contact-us">
            <li className="p-1 pl-2 mb-4">Contact Us</li>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
