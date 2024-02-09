import { Outlet } from "react-router-dom";
import banner from "@/assets/banner-all-menu.jpg";

export const AllMenuLayout = () => {
  return (
    <div className="mt-20">
      <section
        className="min-h-56 flex flex-col justify-center items-center bg-no-repeat bg-cover !text-white"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="text-5xl">Shop</h1>
      </section>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
