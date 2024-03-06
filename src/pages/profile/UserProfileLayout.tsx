import { User } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export const UserProfileLayout = () => {
  return (
    // 7rem=112px
    <main className="grid grid-cols-[7rem_1fr] px-4 mt-28">
      <div className=" ">
        <div>
          <User className="w-20 h-20" />
          <h3>David Matin</h3>
        </div>
        <div>
          <Link to="cart">
            <p className="p-1 border-b border-gray-400 font-medium hover:text-green">
              Cart
            </p>
          </Link>
          <Link to="/profile">
            <p className="p-1 border-b border-gray-400 font-medium hover:text-green">
              Settings
            </p>
          </Link>
          <Link to="sign-out">
            <p className="p-1 border-b border-gray-400 font-medium hover:text-green">
              Sign Out
            </p>
          </Link>
        </div>
      </div>
      <div className="">
        <Outlet />
      </div>
    </main>
  );
};
