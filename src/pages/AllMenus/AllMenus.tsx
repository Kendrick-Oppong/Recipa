import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Sheet, SheetContent, SheetTrigger, SheetClose} from "@/components/ui/sheet";

import { menu } from "@/constants/constants";
import { usePageTitle } from "@/hooks";
import { addSortQuery } from "@/redux/sortQuerySlice";
import { useAppDispatch } from "@/redux/store";
import { SlidersHorizontal } from "lucide-react";
import { Link, Outlet, useLocation, useSearchParams } from "react-router-dom";

export const AllMenus = () => {
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();

  const handleSortQuery = (val: string = "ascending") => {
    dispatch(addSortQuery(val));
    setSearchParams({ sort: val });
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
  usePageTitle(`Shop - ${pageTitle}`);

  return (
    <section className="px-5 mt-0">
      <div className="pt-2">
        <div>
          <Sheet>
            <SheetTrigger>
              <h3 className="inline-flex items-center gap-1">
                <SlidersHorizontal />
                Menu
              </h3>
            </SheetTrigger>
            <SheetContent className="mt-[5rem] md:mt-[4rem] hover:scale-100 text-lg">
              <aside className="px-2 mt-10 border rounded-lg border-green600 ">
                <div className="flex flex-col gap-4 py-4">
                  {menu.map((menu) => (
                    <SheetClose asChild key={menu.title}>
                      <Link
                        key={menu.title}
                        to={`/all-menus/${menu.title.toLowerCase()}`}
                        className="inline-flex items-center p-1 pl-2 rounded-sm hover:bg-green-600 "
                      >
                        <img className="mr-2 md:inline" src={menu.src} alt="" />
                        {menu.title}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </aside>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-wrap items-center justify-around pb-4">
          <div className="mb-6 text-lg font-semibold sm:mb-0">
            <p>
              Showing <span className="text-red-500">1-12</span>{" "} of 12{" "}
              <span className="text-red-500">{pageTitle}</span>
            </p>
          </div>
          <div className="w-[28rem]">
            <Select onValueChange={(val) => handleSortQuery(val)}>
              <SelectTrigger>
                <SelectValue placeholder="Sort Menu By" />
              </SelectTrigger>
              <SelectContent className="border border-green600">
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
                    <p className="text-black dark:text-white">
                      Sort by highest rating
                    </p>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div style={{scrollbarWidth:"none"}} className=" h-[28rem] overflow-y-scroll pb-10">
          <Outlet />
        </div>
      </div>
    </section>
  );
};
