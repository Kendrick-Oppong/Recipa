import { ButtonLink } from "@/components/ui/shared";
import { featuredCategories, overview } from "@/constants/constants";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FeaturedCategories, FeaturedRecipes, TestimonyCarousel } from ".";

export const HomePage = () => {
  return (
    <main className="relative">
      <div className="bg-[url('/wave_menu.svg')] z-50 w-full h-36 bg-repeat-x bg-scroll absolute bg-cover"></div>
      <section className="dark:px-0 relative flex bg-[#f4f2f0] min-h-[40rem] overflow-hidden my-0 shadow-md">
        <img
          src="/hero-food-3.png"
          width={200}
          height={200}
          alt="food"
          className="absolute -top-10 left-40 hidden md:inline-flex spin-image"
        />

        <img
          src="/hero-food-1.png"
          width={400}
          height={400}
          alt="food"
          className="absolute -right-40 -top-20 spin-image"
        />

        <img
          src="/hero-food-2.png"
          width={400}
          height={400}
          alt="food"
          className=" absolute -left-20 -bottom-20 spin-image"
        />

        <div className="relative px-1 sm:px-0 lg:max-w-[70%] m-auto text-center z-10">
          <div>
            <h1 className="text-5xl md:text-7xl dark:text-slate-500 sm:text-gray-600 font-extrabold leading-tight">
              <span className=""> Healthy food </span> for <br></br> busy people
            </h1>
          </div>
          <div className="text-xl leading-normal my-4 text-gray-600">
            <p> Savour the goodness of nutritious food</p>
          </div>
          <Link to="/recipes">
            <ButtonLink className="!text-xl px-8 sm:px-7 py-6 sm:py-5">
              All Categories <ArrowUpRight className="ml-2" />
            </ButtonLink>
          </Link>
        </div>
      </section>
      <section className="grid auto-fit gap-5 max-w-[90%] mx-auto my-20 shadow-md py-16 rounded-lg">
        {overview.map((el, index) => (
          <div
            key={el.title}
            className={`px-5 text-center ${
              index !== overview.length - 1
                ? "border-r-0 border-r-gray-300 border-b-2 pb-8 border-b-gray-300 sm:border-b-0 sm:border-r-2"
                : ""
            }`}
          >
            <img src={el.src} alt={el.title} className="mx-auto" />
            <h3 className="text-green no-underline font-semibold">
              {el.title}
            </h3>
            <p className="text-left">{el.description}</p>
          </div>
        ))}
      </section>
      {/* categories */}
      <div className="px-4 sm:px-10">
        <section className=" dark:pb-40  text-center">
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
            Browse featured categories
          </li>
          <h2>
            Recipes{" "}
            <span>
              Categories.{" "}
              <img src="/twirl-layered.svg" alt="" width={30} height={30} />
            </span>
          </h2>
          <div className="flex flex-wrap justify-center mx-auto gap-5 mt-12">
            {featuredCategories.map((category) => (
              <FeaturedCategories key={category.id} category={category} />
            ))}
          </div>
        </section>
        <section className="dark:pb-20 py-10">
          {/* {api} */}
          <div className="flex flex-wrap justify-between items-center mb-10">
            <h2>
              Latest {""}
              <span>
                recipes by category.
                <img src="/twirl-layered.svg" alt="" width={30} height={30} />
              </span>
            </h2>
            <Link to="/recipes" rel="preload">
              <ButtonLink>
                All Recipes <ArrowUpRight className="ml-2" />
              </ButtonLink>
            </Link>
          </div>
          <FeaturedRecipes />
        </section>
        <section className="pb-28  text-center">
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
            Testimonials
          </li>
          <h2>
            Stories from {""}
            <span>
              our clients.
              <img src="/twirl-layered.svg" alt="" width={30} height={30} />
            </span>
          </h2>
          <TestimonyCarousel />
        </section>
      </div>
    </main>
  );
};
