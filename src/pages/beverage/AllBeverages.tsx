import { getAllSortQuery } from "@/redux/sortQuerySlice";
import { FeaturedMenu as BeverageMenu } from "..";
import { useAppSelector } from "@/redux/store";

export const AllBeverages = () => {
  const query = useAppSelector(getAllSortQuery);

  return (
    <div>
      {BeverageMenu(
        `http://localhost:5000/api/Beverages?sort=${query}`,
        "beverages",
        query
      )}
    </div>
  );
};
