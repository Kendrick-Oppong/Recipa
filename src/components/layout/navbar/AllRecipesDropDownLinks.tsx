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
import { categories } from "@/constants/links";
import { HandPlatter, Component } from "lucide-react";
import { Link } from "react-router-dom";

export function AllRecipesDropDownLinks() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer ">
          Free Recipes
        </MenubarTrigger>
        <MenubarContent className="text-lg z-[300] shadow-2xl ">
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
            </MenubarSubTrigger>
            <MenubarSubContent className="text-lg shadow-2xl">
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
