import { getAllSortQuery } from "@/redux/sortQuerySlice";
import { FeaturedMenu as BurgerMenu } from "..";
import { useAppSelector } from "@/redux/store";

export const AllBurgers = () => {
  const query = useAppSelector(getAllSortQuery);
  console.log(query);
  return (
    <div>
      {BurgerMenu(`http://localhost:5000/api/Burgers?sort=${query}`, "burgers",query)}
    </div>
  );
};
