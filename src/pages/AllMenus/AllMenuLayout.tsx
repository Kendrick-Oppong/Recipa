import { Outlet, useLocation } from "react-router-dom";
import banner from "@/assets/banner-all-menu.jpg";
import { ShoppingBasket, ChevronRight } from "lucide-react";

export const AllMenuLayout = () => {
  const location = useLocation();

  let pageTitle;
  switch (location.pathname) {
    case "/all-menus":
      pageTitle = "All Menus";
      break;
    case "/all-menus/cart":
      pageTitle = "Cart";
      break;
    case "/all-menus/contact-us":
      pageTitle = "Contact Us";
      break;
    case "/all-menus/about-us":
      pageTitle = "About Us";
      break;
    default:
      pageTitle = "";
  }
  return (
    <div className="mt-20">
      <section
        className="min-h-56 flex flex-col justify-center items-center bg-no-repeat bg-cover !text-white"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {pageTitle ? (
          <h1 className="text-5xl font-semibold">{pageTitle}</h1>
        ) : (
          <>
            <h1 className="text-5xl font-semibold">Shop</h1>
            <p className="flex items-center gap-1 mt-2 text-lg text-amber-300">
              <ShoppingBasket className="w-5 h-5" />
              shop <ChevronRight className="w-5 h-5" /> menu
            </p>
          </>
        )}
      </section>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
