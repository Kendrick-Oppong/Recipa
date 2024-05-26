import { getAllSortQuery } from "@/redux/sortQuerySlice";
import { FeaturedMenu as PizzaMenu } from "..";
import { useAppSelector } from "@/redux/store";
import { BACKEND_URL } from "@/constants/constants";

export const AllSushis = () => {
  const query = useAppSelector(getAllSortQuery);

  return PizzaMenu(`${BACKEND_URL}/api/Sushis?sort=${query}`, "sushis", query);
};
