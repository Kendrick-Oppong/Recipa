import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { menu } from "@/constants/constants";
import { addSortQuery } from "@/redux/sortQuerySlice";
import { useAppDispatch } from "@/redux/store";
import { SlidersHorizontal } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const AllMenus = () => {
  const dispatch = useAppDispatch();
  const handleSortQuery = (val: string) => {
    dispatch(addSortQuery(val));
  };

  const location = useLocation();

  let pageTitle;
  switch (location.pathname) {
    case "/all-menus/burgers":
      pageTitle = "burgers";
      break;
    case "/all-menus/pizzas":
      pageTitle = "pizza";
      break;
    case "/all-menus/sushis":
      pageTitle = "sushi";
      break;
    case "/all-menus/salads":
      pageTitle = "salad";
      break;
    case "/all-menus/burritos":
      pageTitle = "burritos";
      break;
    case "/all-menus/beverages":
      pageTitle = "beverages";
      break;
    case "/all-menus/fries":
      pageTitle = "fries";
      break;
    default:
      pageTitle = "";
  }

  return (
    <section className="px-5">
      <div className="px-4 pt-2">
        <div>
          <Sheet>
            <SheetTrigger>
              <h3 className="inline-flex gap-1 items-center">
                <SlidersHorizontal />
                Menu
              </h3>
            </SheetTrigger>
            <SheetContent className="mt-[5rem] md:mt-[4rem] hover:scale-100 text-lg">
              <aside className="border border-green-600 px-2 mt-10 rounded-lg ">
                <div className="flex flex-col gap-4 py-4">
                  {menu.map((menu) => (
                    <Link
                      key={menu.title}
                      to={`/all-menus/${menu.title.toLowerCase()}`}
                      className="inline-flex items-center hover:bg-green-600 p-1 pl-2 rounded-sm "
                    >
                      <img className="mr-2 md:inline" src={menu.src} alt="" />
                      {menu.title}
                    </Link>
                  ))}
                </div>
              </aside>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-wrap justify-around items-center pb-4">
          <div className="font-semibold mb-6 sm:mb-0 text-lg">
            <p>Showing 1-12 of 12 {pageTitle}</p>
          </div>
          <div className="w-64 ">
            <Select onValueChange={(val) => handleSortQuery(val)}>
              <SelectTrigger>
                <SelectValue placeholder="Sort Menu By" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="ascending">
                    <p className="text-black dark:text-white">
                      Sort by title: ascending
                    </p>
                  </SelectItem>
                  <SelectItem value="descending">
                    <p className="text-black dark:text-white">
                      Sort by title: descending
                    </p>
                  </SelectItem>
                  <SelectItem value="low_price">
                    <p className="text-black dark:text-white">
                      Sort by price: low to high
                    </p>
                  </SelectItem>
                  <SelectItem value="high_price">
                    <p className="text-black dark:text-white">
                      Sort by price: high to low
                    </p>
                  </SelectItem>
                  <SelectItem value="rating">
                    <p className="text-black dark:text-white">Sort by highest rating</p>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className=" h-[26rem] overflow-y-scroll pb-10">
          <Outlet />
        </div>
      </div>
    </section>
  );
};
