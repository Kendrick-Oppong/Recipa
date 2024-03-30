import { FeaturedCardProps } from "@/types/types";
import { ButtonLink, ImagePlaceholderSkeleton, LazyImage } from ".";
import { Link } from "react-router-dom";

export const RecipesCard: React.FC<FeaturedCardProps> = ({ recipe }) => {
  return (
    <div className="shadow-2xl border-green600 rounded-lg border relative p-2 pb-16">
      <div className="relative">
        <div className="dark:text-black rounded-lg absolute shadow-md top-2 bg-green-200 px-5 py-3 z-10">
          {recipe.strCategory}
        </div>
        <LazyImage
          src={recipe.strCategoryThumb}
          alt={recipe.strCategoryThumb}
          placeholder={<ImagePlaceholderSkeleton />}
        />
      </div>

      <div className="font-semibold text-lg my-6">
        <p>
          {recipe.strCategoryDescription?.match(/\S+/g)?.slice(0, 12).join(" ")}
          ...
        </p>
      </div>
      <div className="absolute bottom-0 pb-4 left-0 right-0 mx-auto w-[92%]">
        <Link to={`/recipes/${recipe.strCategory}`}>
          <ButtonLink className="w-full">View Categories</ButtonLink>
        </Link>
      </div>
    </div>
  );
};
