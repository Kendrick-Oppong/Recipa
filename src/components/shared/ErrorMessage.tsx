import { handleFetchErrorToast } from "@/lib/utils";
import {
  RecipesProp,
  CategoryProp,
  Meal_ID_Prop,
  MenuProps,
  MenuDetailsProps,
  UserDetails,
} from "@/types/types";
import { RefetchOptions, UseQueryResult } from "@tanstack/react-query";
import { AlertTriangle } from "lucide-react";
import { ButtonLink } from "./ButtonLink";

type UseQueryResultsProps =
  | RecipesProp
  | CategoryProp
  | Meal_ID_Prop
  | MenuProps
  | MenuDetailsProps
  | UserDetails;
interface ErrorMessageProps {
  message: string;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<UseQueryResult<UseQueryResultsProps, Error>>;
}

export const ErrorMessage = ({ message, refetch }: ErrorMessageProps) => {
  if (message) handleFetchErrorToast("Failed to get user info");

  const handleRetry = () => {
    refetch();
  };

  return (
    <>
      <div className="flex justify-center items-center text-lg gap-2 text-red-600">
        <AlertTriangle />
        <h1 className="text-center">Oops! {message}</h1>
      </div>
      <div className="text-center mt-5">
        <ButtonLink onClick={handleRetry} className="">
          Retry
        </ButtonLink>
      </div>
    </>
  );
};
