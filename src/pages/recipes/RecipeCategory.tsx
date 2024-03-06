import {
  CategoryCard,
  ErrorMessage,
  LoadingSkeleton,
} from "@/components/shared";
import { useFetch } from "@/hooks/useFetch";
import { CategoryProp } from "@/types/types";
import { useParams } from "react-router-dom";

export const RecipeCategory = () => {
  const { id } = useParams();

  const {
    data: mealCategory,
    isLoading,
    error,
  } = useFetch<CategoryProp>(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`,
    "recipeCategory",
    id
  );

  if (isLoading)
    return (
      <div className="mt-[8rem] m-10">
        <LoadingSkeleton />
      </div>
    );

  if (error)
    return (
      <div className="mt-[12rem] m-[6rem]">
        <ErrorMessage message={error?.message} />
      </div>
    );
  return (
    <main className="mt-28 px-4 sm:px-10">
      <h2 className="mt-8">{id}</h2>
      <section className="grid auto-fit gap-4 pb-10 ">
        {mealCategory?.meals?.map((categoryName) => (
          <CategoryCard
            meal={id!}
            categoryName={categoryName}
            key={categoryName.idMeal}
          />
        ))}
      </section>
    </main>
  );
};
