import { ErrorMessage, ModalWindow } from "@/components/ui/shared";

import { useFetch } from "@/hooks/useFetch";
import { Meal_ID_Prop } from "@/types/types";
import { Key } from "react";
import { useParams } from "react-router-dom";

export const CategoryMealDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch<Meal_ID_Prop>(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    "categoryMealDetail",
    id
  );

  const mealDetail = data?.meals[0];

  if (isLoading)
    return (
      <div
        role="status"
        className="mt-[8rem] my-20 max-w-[80%] mx-auto space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
      >
        <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="w-full">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );

  if (error)
    return (
      <div className="mt-[12rem] m-[6rem]">
        <ErrorMessage message={error?.message} />
      </div>
    );

  return (
    <main className="mt-28 px-4 sm:px-10 my-10">
      <div className="max-w-[90%] sm:max-w-[80%]  mx-auto">
        <div className="flex gap-5 mx-auto sm:flex-wrap place-items-center  border-green-600 rounded-lg border shadow-2xl">
          <div className="w-full lg:w-auto rounded-2xl">
            <img 
              src={mealDetail!.strMealThumb!}
              width={300}
              height={300}
              alt={mealDetail!.strMealThumb!}
              className=" rounded-lg w-full lg:h-80 "
            />
          </div>
          <div className="relative font-semibold text-lg lg:ml-6 my-6 ml-4 sm:ml-0 min-w-[90%] sm:min-w-[60%] pr-3">
            <div className="dark:text-black rounded-lg absolute shadow-md right-12 top-0 bg-green-100  px-4 mr-1 py-1">
              {mealDetail?.strCategory} / {mealDetail?.strArea}
            </div>
            <img
              src="/featured.png"
              alt=""
              width={30}
              height={30}
              className="ml-auto"
            />
            <h2>
              <span>{mealDetail?.strMeal}</span>{" "}
            </h2>
          </div>
        </div>
        <div className="flex justify-center text-xl  gap-6 my-10 text-green ">
          {mealDetail?.strYoutube && mealDetail?.strYoutube !== "" && (
            <>
              <div>
                <h1>Watch Tutorial</h1>
              </div>
              <div className="cursor-pointer self-center">
                <ModalWindow url={mealDetail?.strYoutube} />
              </div>
            </>
          )}
        </div>
        <section className="mb-0">
          <h2 className="my-8">
            <span>
              Ingredients.
              <img src="/twirl-layered.svg" alt="" width={30} height={30} />
            </span>
          </h2>
        </section>
        <ul className="text-green-600 text-lg font-medium !list-disc border-green-600 rounded-lg border shadow-2xl p-4">
          {mealDetail &&
            Object.keys(mealDetail).map((key) => {
              const ingredient = mealDetail[key];
              if (
                key.startsWith("strIngredient") &&
                ingredient &&
                ingredient.trim() !== ""
              ) {
                return (
                  <li key={key} className="ml-6 list-disc">
                    {ingredient}
                  </li>
                );
              }
              return null;
            })}
        </ul>
        <section className="dark:pb-20 px-0">
          <h2 className="my-8">
            <span>
              Instructions.{" "}
              <img src="/twirl-layered.svg" alt="" width={30} height={30} />
            </span>
          </h2>
          <ul className="text-green-600 text-lg font-medium !list-disc border-green-600 rounded-lg border shadow-2xl p-4">
            {mealDetail?.strInstructions?.split(".").map(
              (instruction: string, index: Key | null | undefined) =>
                instruction.trim() && (
                  <li key={index} className="ml-6 list-disc">
                    {instruction.trim()}
                  </li>
                )
            )}
          </ul>
        </section>
      </div>
    </main>
  );
};