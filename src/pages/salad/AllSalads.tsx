import { getAllSortQuery } from "@/redux/sortQuerySlice";
import { FeaturedMenu as SaladMenu } from "..";
import { useAppSelector } from "@/redux/store";

export const AllSalads = () => {
  const query = useAppSelector(getAllSortQuery);

  return SaladMenu(
    `http://localhost:5000/api/Salads?sort=${query}`,
    "salads",
    query
  );
};
