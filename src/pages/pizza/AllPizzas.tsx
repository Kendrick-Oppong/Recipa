import { getAllSortQuery } from "@/redux/sortQuerySlice";
import { FeaturedMenu as PizzaMenu } from "..";
import { useAppSelector } from "@/redux/store";

export const AllPizzas = () => {
  const query = useAppSelector(getAllSortQuery);

  return PizzaMenu(
    `http://localhost:5000/api/Pizzas?sort=${query}`,
    "pizzas",
    query
  );
};
