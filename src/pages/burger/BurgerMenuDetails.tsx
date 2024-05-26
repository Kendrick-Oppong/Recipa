import { useParams } from "react-router-dom";
import { MenuDetails as FullMenuDetails } from "..";
import { BACKEND_URL } from "@/constants/constants";

export const BurgerMenuDetails = () => {
  const { category, title, id } = useParams();

  return FullMenuDetails(
    `${BACKEND_URL}/api/${category}/${id}`,
    title!,
    id
  );
};
