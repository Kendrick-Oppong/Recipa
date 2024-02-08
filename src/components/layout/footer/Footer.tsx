import { Link } from "react-router-dom";
import { Logo } from "../navbar";
import { categories } from "@/constants/constants";
import { Input } from "@/components/ui/input";
import { Rocket } from "lucide-react";
import { ButtonLink } from "@/components/ui/shared";

export const Footer = () => {
  return (
    <div className="shadow-2xl">
      <section className="px-5 pb-20 my-0 text-center">
        <h2>
          Join for{" "}
          <span>
            Hot Offers.{" "}
            <img src="/twirl-layered.svg" alt="" width={30} height={30} />
          </span>
        </h2>
        <li className="flex items-center justify-center sm:text-lg">
          <svg
            className="w-4 h-4 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          Subscribe to the newsletter for exclusive promos
        </li>
        <div className="flex flex-wrap gap-4 sm:flex-nowrap w-full max-w-4xl mx-auto mt-8 items-center space-x-2">
          <Input
            type="email"
            required
            placeholder="Enter Your Email Address..."
            className="p-5 text-base shadow-md"
          />
          <ButtonLink className="w-full !ml-0 mt-3 sm:mt-0 sm:w-auto rounded-sm">
            Subscribe <Rocket className="ml-2" />
          </ButtonLink>
        </div>
      </section>
      <footer className="px-5 pt-10 dark:on-dark-shadow sm:grid sm:grid-cols-2 lg:grid-cols-3  text-lg !bg-[#aeafb42b] dark:!bg-[#030c22c9]">
        <div>
          <Logo />
          <p className="mt-3">
            Explore a world of delicious recipes with Recipy! From
            mouth-watering mains to delightful desserts, discover a variety of
            culinary delights
          </p>
        </div>
        <div className="justify-self-center mt-8 sm:mt-0">
          <h3>Navigation</h3>
          <Link to="/">
            <li className="list-none mb-2 hover:text-green-600"> Home</li>
          </Link>
          <Link to="/recipes" className="list-none hover:text-green-700">
            <li> Recipes</li>
          </Link>
        </div>
        <div className="justify-self-center mt-8 sm:mt-0">
          <h3>Categories</h3>
          <ul className="space-y-4 text-base ">
            {categories.map((category) => (
              <Link to={`/categories/${category.name}`} key={category.id}>
                <li
                  className={`text-base gap-2 hover:text-green-700 cursor-pointer`}
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
        <p className="text-center pb-4  ">
          Copyright &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};
