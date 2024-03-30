import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { categories } from "@/constants/constants";
import { HandPlatter, Component } from "lucide-react";
import { Link } from "react-router-dom";

export function AllRecipesDropDownLinks() {
  return (
    <Menubar className="w-[142px] border dark:border-none border-green600">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer w-full">
          Free Recipes
        </MenubarTrigger>
        <MenubarContent className="text-lg z-[10006] shadow-2xl border border-green600">
          <Link to="/recipes">
            <MenubarItem>
              <HandPlatter strokeWidth={1} className="mr-2 text-green" />
              All Recipes
            </MenubarItem>
          </Link>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>
              <Component strokeWidth={1} className="mr-2 text-green" />
              Categories
            </MenubarSubTrigger>{" "}
            {/* -translate-x-[170px] sm:translate-x-[187px] translate-y-[65px] sm:translate-y-[54px] */}
            <MenubarSubContent className="text-lg shadow-2x border border-green600 sm:ml-2">
              {categories.map((category) => (
                <div key={category.id}>
                  <Link to={`/recipes/${category.name}`}>
                    <MenubarItem className="text-lg">
                      <img src={category.icon} alt="" className="mr-2" />
                      {category.name}
                    </MenubarItem>
                    <MenubarSeparator />
                  </Link>
                </div>
              ))}
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
