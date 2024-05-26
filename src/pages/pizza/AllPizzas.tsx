import { getAllSortQuery } from "@/redux/sortQuerySlice";
import { FeaturedMenu as PizzaMenu } from "..";
import { useAppSelector } from "@/redux/store";
import { BACKEND_URL } from "@/constants/constants";

export const AllPizzas = () => {
  const query = useAppSelector(getAllSortQuery);

  return PizzaMenu(
    `${BACKEND_URL}/api/Pizzas?sort=${query}`,
    "pizzas",
    query
  );
};
