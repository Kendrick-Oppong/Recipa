import { getAllSortQuery } from "@/redux/sortQuerySlice";
import { FeaturedMenu as BurgerMenu } from "..";
import { useAppSelector } from "@/redux/store";

export const AllBurgers = () => {
  const query = useAppSelector(getAllSortQuery);
 
  return BurgerMenu(
    `http://localhost:5000/api/Burgers?sort=${query}`,
    "burgers",
    query
  );
};
