import { getAllSortQuery } from "@/redux/sortQuerySlice";
import { FeaturedMenu as SaladMenu } from "..";
import { useAppSelector } from "@/redux/store";
import { BACKEND_URL } from "@/constants/constants";

export const AllSalads = () => {
  const query = useAppSelector(getAllSortQuery);

  return SaladMenu(
    `${BACKEND_URL}/api/Salads?sort=${query}`,
    "salads",
    query
  );
};
