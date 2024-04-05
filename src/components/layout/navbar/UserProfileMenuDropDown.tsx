import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { usePost as useSignOut } from "@/hooks";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { signOut } from "@/redux/userAuthenticatedSlice";
import { getUserProfileImage } from "@/redux/userProfileImageSlice";
import {
  User,
  Package,
  ShoppingBasket,
  LogOut,
  UserCogIcon,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function UserProfileMenuDropDown() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const profileImage = useAppSelector(getUserProfileImage);
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
    <Menubar className="w-[58px] border dark:border-none border-green600">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">
          {profileImage ? (
            <img
              role="button"
              src={profileImage}
              alt=""
              className=" border dark:border-white w-8 h-8 rounded-full"
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
