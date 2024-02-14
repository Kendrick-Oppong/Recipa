import {
  ButtonLink,
  ErrorMessage,
  LoadingSkeleton,
  RecipesCard,
} from "@/components/ui/shared";
import { useFetch } from "@/hooks";
import { Recipe, RecipesProp } from "@/types/types";
import { Utensils } from "lucide-react";

import { Link } from "react-router-dom";

export const RecipesPage: React.FC = () => {
  const { data, isLoading, error } = useFetch<RecipesProp>(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
    "allRecipes"
  );
 
  const recipes = data?.categories.reverse();


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
    <main className="mt-28 px-4 sm:px-10  my-10">
      <div className="flex flex-wrap place-items-center gap-4 py-10 justify-center  border-green-600 rounded-lg border shadow-2xl">
        <div>
          <img
            src="/pasta.png"
            width={400}
            height={400}
            loading="lazy"
            alt=""
            className={`transition`}
          />
        </div>

        <div className="pl-3 font-semibold text-lg my-6 ">
          <img
            src="/featured.png"
            alt=""
            width={30}
            height={30}
            className="ml-auto mr-3 sm:mr-0"
          />
          <h2>
            <span>Pasta</span>{" "}
          </h2>
          <p className="text-2xl mb-5">
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
      <section className="dark:pb-10 grid auto-fit gap-4">
        {recipes?.map((recipe: Recipe) => (
          <RecipesCard recipe={recipe} key={recipe.idCategory} />
        ))}
      </section>
    </main>
  );
};
