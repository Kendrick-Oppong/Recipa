import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { menu } from "@/constants/constants";
import { addSortQuery } from "@/redux/sortQuerySlice";
import { useAppDispatch } from "@/redux/store";
import { Link, Outlet } from "react-router-dom";

export const AllMenus = () => {
  const dispatch = useAppDispatch();

  const handleSortQuery = (val: string) => {
    dispatch(addSortQuery(val));
  };

  return (
    <section className="grid px-5 grid-cols-[200px_1fr]">
      <aside>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-green">
              Categories
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-6 justify-center">
              {menu.map((menu) => (
                <Link key={menu.title} to={`/all-menus/${menu.title}s`}>
                  <img className="mr-2 md:inline" src={menu.src} alt="" />
                  {menu.title}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </aside>
      <div className="px-4 pt-2 h-[26rem] overflow-y-scroll">
        <div className="flex justify-between items-center">
          <div className="font-semibold">
            <p>Showing 1-12 of 12 items</p>
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
                    <p className="text-black dark:text-white">Highest rating</p>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Outlet />
      </div>
    </section>
  );
};
