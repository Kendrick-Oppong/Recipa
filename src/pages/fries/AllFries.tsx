import { getAllSortQuery } from "@/redux/sortQuerySlice";
import { FeaturedMenu as FriesMenu } from "..";
import { useAppSelector } from "@/redux/store";

export const AllFries = () => {
  const query = useAppSelector(getAllSortQuery);
  console.log(query);
  return (
    <div>
      {FriesMenu(
        `http://localhost:5000/api/Fries?sort=${query}`,
        "fries",
        query
      )}
    </div>
  );
};
