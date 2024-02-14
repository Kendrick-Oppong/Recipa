import { ButtonLink } from "@/components/ui/shared";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PopularMenus } from ".";

export const ShoppingPage = () => {
  return (
    <main>
      <div className="bg-[url('/wave_menu.svg')] z-50 w-full h-36 bg-repeat-x bg-scroll absolute bg-cover"></div>
      <section className="dark:px-0 relative flex bg-[#f4f2f0] min-h-[40rem] overflow-hidden my-0 shadow-md">
        <img
          src="/food-image-03.png"
          width={400}
          height={400}
          alt="food"
          className="absolute -top-5 left-40 hidden md:inline-flex"
        />
        <img
          src="/food-image-02.png"
          width={400}
          height={400}
          alt="food"
          className="absolute -right-20 -top-10"
        />

        <img
          src="/food-image-01.png"
          width={400}
          height={400}
          alt="food"
          className=" absolute -left-20 -bottom-20"
        />

        <div className="relative px-1 sm:px-0 lg:max-w-[70%] m-auto text-center z-10">
          <div>
            <h1 className="text-5xl md:text-7xl dark:text-slate-500 sm:text-gray-600 font-extrabold leading-tight">
              <span className=""> Satisfy </span> your <br></br> cravings
            </h1>
          </div>
          <div className="text-xl leading-normal my-4 text-gray-600">
            <p> Juicy and crispy taste</p>
          </div>
          <Link to="/all-menus/burgers">
            <ButtonLink className="!text-xl px-8 sm:px-7 py-6 sm:py-5">
              All Menu <ArrowUpRight className="ml-2" />
            </ButtonLink>
          </Link>
        </div>
      </section>
      <section className="pb-10 text-center">
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
          Mouth-watering menus
        </li>
        <h2>
          Our{" "}
          <span>
            Special Menu.{" "}
            <img src="/twirl-layered.svg" alt="" width={30} height={30} />
          </span>
        </h2>
        <PopularMenus />
        <Link to="/all-menus/burgers">
          <ButtonLink className="!text-xl px-8 sm:px-7 py-6 sm:py-5 mt-10">
            See All Menu <ArrowUpRight className="ml-2" />
          </ButtonLink>
        </Link>
      </section>
    
    </main>
  );
};
