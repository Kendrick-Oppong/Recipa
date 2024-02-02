
import { Utensils } from "lucide-react";

import { FeaturedCardProps } from "@/types/types";

import { ButtonLink } from ".";
import { Link } from "react-router-dom";

export const RecipesCard: React.FC<FeaturedCardProps> = ({ recipe }) => {
  return (
    <div className="shadow-2xl transition border-green-600 rounded-lg border relative p-3">
      <div className="dark:text-black rounded-lg absolute shadow-md right-4 top-3 bg-green-200  px-5 py-3">
        {recipe.strCategory}
          </div>
          
      <img
        src={recipe.strCategoryThumb}
        width={400}
        height={400}
        alt={recipe.strCategoryThumb}
      />
      <div className="font-semibold text-lg my-6">
        <p>
          {recipe.strCategoryDescription?.match(/\S+/g)?.slice(0, 12).join(" ")}
          ...
        </p>
      </div>   
      <Link to={`/recipes/${recipe.strCategory}`}>
        <ButtonLink>
          View Details <Utensils className="ml-3" />
        </ButtonLink>
      </Link>
    </div>
  );
};
