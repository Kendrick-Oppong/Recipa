import { getAllSortQuery } from "@/redux/sortQuerySlice";
import { FeaturedMenu as BurritoMenu } from "..";
import { useAppSelector } from "@/redux/store";

export const AllBurritos = () => {
  const query = useAppSelector(getAllSortQuery);

  return (
    <div>
      {BurritoMenu(
        `http://localhost:5000/api/Burritos?sort=${query}`,
        "burritos",
        query
      )}
    </div>
  );
};
