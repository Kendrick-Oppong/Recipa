import {
  CategoryCard,
  ErrorMessage,
  LoadingSkeleton,
} from "@/components/shared";
import { usePageTitle } from "@/hooks";
import { useFetch } from "@/hooks/useFetch";
import { CategoryProp } from "@/types/types";
import { useParams } from "react-router-dom";

export const CategoryPage = () => {
  const { category } = useParams();
  usePageTitle(category!);
  const {
    data: mealCategory,
    isLoading,
    error,
    refetch,
  } = useFetch<CategoryProp>(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    "allCategories",
    false,
    category
  );

  if (isLoading)
    return (
      <div className="mt-[2rem] m-10">
        <LoadingSkeleton />
      </div>
    );

  if (error)
    return (
      <div className="mt-[4rem] m-[3rem]">
        <ErrorMessage refetch={refetch} message={error?.message} />
      </div>
    );
  return (
    <main className=" px-4 sm:px-10">
      <h2 className="mt-8">
        Free <span> {category}</span> recipes
      </h2>
      <section className="grid auto-fit gap-4">
        {mealCategory?.meals.map((categoryName) => (
          <CategoryCard
            meal={category!}
            categoryName={categoryName}
            key={categoryName.idMeal}
          />
        ))}
      </section>
    </main>
  );
};
