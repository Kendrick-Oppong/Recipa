import {
  ButtonLink,
  CategoryCard,
  ErrorMessage,
  LoadingSkeleton,
} from "@/components/shared";
import { usePageTitle } from "@/hooks";
import { useFetch } from "@/hooks/useFetch";
import { Category, CategoryProp } from "@/types/types";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const RecipeCategory = () => {
  const { id } = useParams();
  usePageTitle("Recipe Categories");

  const {
    data: mealCategory,
    isLoading,
    error,
    fetchNextPage,
    refetch,
  } = useFetch<CategoryProp>(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`,
    "recipeCategory",
    undefined,
    id
  );

  const [itemsToShow, setItemsToShow] = useState(6);

  const loadMoreItems = () => {
    // Increase the number of items to show
    setItemsToShow(itemsToShow + 6);
    // Fetch next batch of items
    fetchNextPage();
  };

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
    <main className="px-4 pb-10 mb-10 sm:px-10 on-dark-shadow">
      <h2 className="mt-8">
        Free <span>{id}</span> recipes
      </h2>
      <section className="dark:shadow-none grid auto-fit gap-4 mt-0 !pt-0 pb-5 mb-0">
        {mealCategory?.meals
          .slice(0, itemsToShow)
          ?.map((categoryName: Category) => (
            <CategoryCard
              meal={id!}
              categoryName={categoryName}
              key={categoryName.idMeal}
            />
          ))}
      </section>
      {mealCategory?.meals && mealCategory?.meals.length > itemsToShow && (
        <div className="text-center">
          <ButtonLink onClick={loadMoreItems}>Load More Recipes</ButtonLink>
        </div>
      )}
    </main>
  );
};

//   return (
//     <main className="px-4 sm:px-10">

//       <section className="grid auto-fit gap-4 mt-0 !pt-0 pb-10 ">

//     </main>
//   );
// };
