import {
  ErrorMessage,
  LoadingSkeleton,
  RecipesCard,
} from "@/components/ui/shared";
import { useFetch } from "@/hooks/useFetch";
import { RecipesProp } from "@/types/types";

export const FeaturedRecipes: React.FC = () => {
  const { data, isLoading, error } = useFetch<RecipesProp>(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
    "featuredRecipes"
  );

  const slicedData = data?.categories.slice(0, 6);

  if (isLoading) return <LoadingSkeleton />;
  if (error) return <ErrorMessage message={error?.message} />;

  return (
    <div className="grid auto-fit gap-4">
      {slicedData?.map((recipe) => (
        <RecipesCard recipe={recipe} key={recipe.idCategory} />
      ))}
    </div>
  );
};
