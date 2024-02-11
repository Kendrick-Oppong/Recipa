import { getAllSortQuery } from "@/redux/sortQuerySlice";
import { FeaturedMenu as PizzaMenu } from "..";
import { useAppSelector } from "@/redux/store";

export const AllSushis = () => {
  const query = useAppSelector(getAllSortQuery);
 
  return (
    <div>
      {PizzaMenu(
        `http://localhost:5000/api/Sushis?sort=${query}`,
        "sushis",
        query
      )}
    </div>
  );
};
