import { User, Package, ShoppingBasket, LogOut } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export const UserProfileLayout = () => {
  return (
    // 7rem=112px
    <main className="grid grid-cols-[auto_1fr] mx-4 rounded-lg mt-28 mb-16 border border-gray-400">
      <div className="relative self-center">
        <div className="self-center">
          <Link to="/profile">
            <p className="p-1 flex items-center border-b border-gray-400 font-medium hover:text-green">
              <User />
              Profile
            </p>
          </Link>
          <Link to="orders">
            <p className="p-1 flex items-center my-4 border-b border-gray-400 font-medium hover:text-green">
              <Package />
              Orders
            </p>
          </Link>
          <Link to="cart">
            <p className="p-1 flex items-center my-4 border-b border-gray-400 font-medium hover:text-green">
              <ShoppingBasket /> Cart
            </p>
          </Link>
          <Link to="sign-out">
            <p className="p-1 flex items-center my-4 border-b border-gray-400 font-medium hover:text-green">
              <LogOut />
              Sign Out
            </p>
          </Link>
        </div>
      </div>
      <div className="p-4 border-l border-gray-400">
        <Outlet />
      </div>
    </main>
  );
};
