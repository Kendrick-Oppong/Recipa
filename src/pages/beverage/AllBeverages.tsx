import { getAllSortQuery } from "@/redux/sortQuerySlice";
import { FeaturedMenu as BeverageMenu } from "..";
import { useAppSelector } from "@/redux/store";
import { BACKEND_URL } from "@/constants/constants";

export const AllBeverages = () => {
  const query = useAppSelector(getAllSortQuery);

  return BeverageMenu(
    `${BACKEND_URL}/api/Beverages?sort=${query}`,
    "beverages",
    query
  );
};
