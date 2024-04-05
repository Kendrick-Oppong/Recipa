import { Link, useLocation } from "react-router-dom";
import { Logo } from "../navbar";
import { categories, menu, navigationLinks } from "@/constants/constants";
import { NewsletterForm } from "./";

export const Footer = () => {
  const location = useLocation();
  const excludedPaths = [
    "/signup",
    "/signin",
    "/profile",
    "/all-menus/contact-us",
    "/all-menus/about-us",
  ];

  return (
    <div className="shadow-2xl">
      {!excludedPaths.includes(location.pathname) && (
        <section className="px-4 pb-20 my-0 text-center">
          <h2>
            Join for {""}
            <span>
              Hot Offers.{" "}
              <img src="/twirl-layered.svg" alt="" width={30} height={30} />
            </span>
          </h2>
          <li className="flex items-center justify-center sm:text-lg">
            <svg
              className="hidden sm:inline w-4 h-4 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Subscribe to the newsletter for exclusive promos
          </li>
        
            <NewsletterForm />
        
        </section>
      )}
      <footer className=" !bg-[#aeafb42b] dark:!bg-[#030c22c9] dark:on-dark-shadow px-5 pb-10">
        <div className=" pt-10 grid auto-fit gap-5 text-lg">
          <div>
            <Logo />
            <p className="mt-3">
              Welcome to Recipa, a place where a symphony of flavors and passion
              collide.Our restaurant welcomes you on a voyage
            </p>
          </div>
          <div className=" md:ml-12">
            <h3 className="text-green mt-0">Navigation</h3>
            {navigationLinks.map((link) => (
              <Link
                to={link.path}
                key={link.label}
                className="list-none hover:text-green-700"
              >
                <li className="mb-2"> {link.label}</li>
              </Link>
            ))}
          </div>
          <div>
            <h3 className="text-green mt-0">Recipes</h3>
            <ul className="space-y-4">
              {categories.map((category) => (
                <Link to={`/categories/${category.name}`} key={category.id}>
                  <li
                    className={`text-lg mb-2 hover:text-green-700 cursor-pointer`}
                  >
                    <img
                      src={category.icon}
                      alt={category.icon}
                      width={30}
                      height={30}
                      className="inline-flex mr-2"
                    />
                    {category.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-green mt-0">Shop(Menu)</h3>
            <ul className="space-y-4">
              {menu.map((menu) => (
                <Link
                  key={menu.title}
                  to={`all-menus/${menu.title.toLowerCase()}`}
                >
                  <li
                    className={`text-lg mb-2 hover:text-green-700 cursor-pointer`}
                  >
                    <img className="mr-2 inline-flex" src={menu.src} alt="" />
                    {menu.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-green mt-0">Opening Hours</h3>
            <div className="flex justify-between border-b border-gray-400 pb-1 mb-2">
              <p>Mon - Tue </p>
              <p>09:00 am - 4:00 pm</p>
            </div>
            <div className="flex justify-between">
              <p>Wed - Thu</p>
              <p>10:00 am - 11:00 pm</p>
            </div>
          </div>
        </div>
        <p className="text-center mt-8 text-lg ">
          Copyright &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};
