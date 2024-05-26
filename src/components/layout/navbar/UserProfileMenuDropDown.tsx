import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { usePost as useSignOut } from "@/hooks";
import { useAppSelector } from "@/redux/store";
import { getUserProfileImage } from "@/redux/userProfileImageSlice";
import {
  User,
  Package,
  ShoppingBasket,
  LogOut,
  UserCogIcon,
} from "lucide-react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export function UserProfileMenuDropDown() {
  const navigate = useNavigate();

  const profileImage = useAppSelector(getUserProfileImage);
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
    <Menubar className="w-[58px] border dark:border-none border-green600">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">
          {profileImage ? (
            <img
              role="button"
              src={profileImage}
              alt=""
              className="w-8 h-8 border rounded-full dark:border-white"
            />
          ) : (
            <UserCogIcon />
          )}
        </MenubarTrigger>
        <MenubarContent className="text-lg z-[10006] shadow-2xl min-w-[9rem] border border-green600">
          <Link to="/profile">
            <MenubarItem>
              <User className="mr-1" />
              <p> Profile</p>
            </MenubarItem>
          </Link>
          <MenubarSeparator />
          <Link to="/profile/orders">
            <MenubarItem>
              <Package className="mr-1" />
              <p> Orders</p>
            </MenubarItem>
          </Link>
          <MenubarSeparator />
          <Link to="/all-menus/cart">
            <MenubarItem>
              <ShoppingBasket className="mr-1" /> <p>Cart</p>
            </MenubarItem>
          </Link>
          <MenubarSeparator />

          <MenubarItem onClick={handleSignOut}>
            <LogOut className="mr-1" />
            <p> Sign Out</p>
          </MenubarItem>

          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
