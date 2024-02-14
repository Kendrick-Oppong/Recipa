import { useParams } from "react-router-dom";
import { MenuDetails as FullBurgerMenuDetails } from "..";

export const BurgerMenuDetails = () => {
  const { title, id } = useParams();
  console.log(id);
  return FullBurgerMenuDetails(
    `http://localhost:5000/api/Burger/${id}`,
    title!,
    id
  );
};

//http://localhost:5000/api/Burger/65bff93875ea2e086a6af659
