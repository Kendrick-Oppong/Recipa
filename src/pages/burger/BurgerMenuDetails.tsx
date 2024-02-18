import { useParams } from "react-router-dom";
import { MenuDetails as FullMenuDetails } from "..";

export const BurgerMenuDetails = () => {
  const { category, title, id } = useParams();

  return FullMenuDetails(
    `http://localhost:5000/api/${category}/${id}`,
    title!,
    id
  );
};
