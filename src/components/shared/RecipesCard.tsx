import { Utensils } from "lucide-react";

import { FeaturedCardProps } from "@/types/types";

import { ButtonLink, ImagePlaceholderSkeleton, LazyImage } from ".";
import { Link } from "react-router-dom";


export const RecipesCard: React.FC<FeaturedCardProps> = ({ recipe }) => {
 

  return (
    <div className="shadow-2xl border-green-600 rounded-lg border relative p-3">
  
      <div className="dark:text-black rounded-lg absolute shadow-md right-4 top-3 bg-green-200 px-5 py-3 z-10">
        {recipe.strCategory}
      </div>

      <LazyImage
        src={recipe.strCategoryThumb}
        alt={recipe.strCategoryThumb}
        placeholder={<ImagePlaceholderSkeleton />}
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
