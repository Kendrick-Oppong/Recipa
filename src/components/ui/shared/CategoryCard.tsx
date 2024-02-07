import { Link } from "react-router-dom";
import { ButtonLink, ImagePlaceholderSkeleton, LazyImage } from ".";
import { Utensils } from "lucide-react";
import { CategoryName } from "@/types/types";


export const CategoryCard: React.FC<CategoryName> = ({
  meal,
  categoryName,
}) => {
 

  return (
    <div className="shadow-2xl border-green-600 rounded-lg border relative p-3">
    
      <LazyImage
        src={categoryName.strMealThumb}
        alt={categoryName.strMealThumb}
        placeholder={<ImagePlaceholderSkeleton />} 
      />
      <div className="font-semibold text-lg my-6">
        <p>{categoryName.strMeal}</p>
      </div>
      <Link to={`/categories/${meal}/${categoryName.idMeal}`}>
        <ButtonLink>
          View Details <Utensils className="ml-3" />
        </ButtonLink>
      </Link>
    </div>
  );
};
