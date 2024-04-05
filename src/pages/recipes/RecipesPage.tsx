import {
  ButtonLink,
  ErrorMessage,
  LoadingSkeleton,
  RecipesCard,
} from "@/components/shared";
import { useFetch, usePageTitle } from "@/hooks";
import { Recipe, RecipesProp } from "@/types/types";
import { Utensils } from "lucide-react";

import { Link } from "react-router-dom";

export const RecipesPage: React.FC = () => {
  const { data, isLoading, error, refetch } = useFetch<RecipesProp>(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
    "allRecipes"
  );
  usePageTitle("All Recipes");
  const recipes = data?.categories.reverse();

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
    <main className="px-4 my-10 sm:px-10">
      <div className="flex flex-wrap justify-center gap-4 py-10 border rounded-lg shadow-2xl place-items-center border-green600">
        <div>
          <img
            src="/pasta.png"
            width={350}
            height={350}
            loading="lazy"
            alt=""
            className="spin-image"
          />
        </div>

        <div className="pl-3 my-6 text-lg font-semibold ">
          <img
            src="/featured.png"
            alt=""
            width={30}
            height={30}
            className="ml-auto mr-3 sm:mr-0 "
          />
          <h2>
            <span>Pasta</span>{" "}
          </h2>
          <p className="mb-5 text-2xl">
            Pasta is a staple food of traditional Italian cuisine,
          </p>
          <Link to="/recipes/Pasta">
            <ButtonLink>
              View Details <Utensils className="ml-3" />
            </ButtonLink>
          </Link>
        </div>
      </div>
      <h2 className="my-8">
        All{" "}
        <span>
          Recipes.{" "}
          <img src="/twirl-layered.svg" alt="" width={30} height={30} />
        </span>
      </h2>
      <section className="grid gap-4 dark:pb-10 auto-fit-menu-skeleton">
        {recipes?.map((recipe: Recipe) => (
          <RecipesCard recipe={recipe} key={recipe.idCategory} />
        ))}
      </section>
    </main>
  );
};
