import {
  ErrorMessage,
  LoadingSkeleton,
  RecipesCard,
} from "@/components/shared";
import { useFetch } from "@/hooks/useFetch";
import { RecipesProp } from "@/types/types";

export const FeaturedRecipes: React.FC = () => {
  const { data, isLoading, error, refetch } = useFetch<RecipesProp>(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
    "featuredRecipes"
  );

  const slicedData = data?.categories.slice(0, 4);

  if (error) return <ErrorMessage refetch={refetch} message={error?.message} />;
  if (isLoading) return <LoadingSkeleton />;

  return (
    <div className="grid auto-fit gap-4">
      {slicedData?.map((recipe) => (
        <RecipesCard recipe={recipe} key={recipe.idCategory} />
      ))}
    </div>
  );
};
