import { getAllSortQuery } from "@/redux/sortQuerySlice";
import { FeaturedMenu as BurritoMenu } from "..";
import { useAppSelector } from "@/redux/store";
import { BACKEND_URL } from "@/constants/constants";

export const AllBurritos = () => {
  const query = useAppSelector(getAllSortQuery);

  return BurritoMenu(
    `${BACKEND_URL}/api/Burritos?sort=${query}`,
    "burritos",
    query
  );
};
