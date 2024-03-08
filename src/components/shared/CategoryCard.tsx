import { Link } from "react-router-dom";
import { ButtonLink, ImagePlaceholderSkeleton, LazyImage } from ".";
import { Utensils } from "lucide-react";
import { CategoryName } from "@/types/types";

export const CategoryCard: React.FC<CategoryName> = ({
  meal,
  categoryName,
}) => {
  return (
    <div className="shadow-2xl border-green-600 rounded-lg border relative p-3 pb-14">
      <LazyImage
        src={categoryName.strMealThumb}
        alt={categoryName.strMealThumb}
        className="mx-auto w-auto "
        placeholder={<ImagePlaceholderSkeleton />}
      />
      <div className="font-semibold text-lg my-6">
        <p>{categoryName.strMeal}</p>
      </div>
      <div className="absolute bottom-0 pb-4 left-0 right-0 mx-auto w-[92%]">
        <Link to={`/categories/${meal}/${categoryName.idMeal}`}>
          <ButtonLink className="w-full">
            View Details <Utensils className="ml-3" />
          </ButtonLink>
        </Link>
      </div>
    </div>
  );
};
