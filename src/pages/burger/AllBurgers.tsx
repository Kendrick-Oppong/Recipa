import { getAllSortQuery } from "@/redux/sortQuerySlice";
import { FeaturedMenu as BurgerMenu } from "..";
import { useAppSelector } from "@/redux/store";
import { BACKEND_URL } from "@/constants/constants";

export const AllBurgers = () => {
  const query = useAppSelector(getAllSortQuery);

  return BurgerMenu(
    `${BACKEND_URL}/api/Burgers?sort=${query}`,
    "burgers",
    query
  );
};
