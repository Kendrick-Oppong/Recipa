import { getAllSortQuery } from "@/redux/sortQuerySlice";
import { FeaturedMenu as FriesMenu } from "..";
import { useAppSelector } from "@/redux/store";
import { BACKEND_URL } from "@/constants/constants";

export const AllFries = () => {
  const query = useAppSelector(getAllSortQuery);

  return FriesMenu(
    `${BACKEND_URL}/api/Fries?sort=${query}`,
    "fries",
    query
  );
};
