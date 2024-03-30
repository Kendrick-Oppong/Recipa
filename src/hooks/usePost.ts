import { handlePostErrorToast } from "@/lib/utils";
import { SignInFormData, SignUpFormData } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

const fetcher = (url: string, data?: SignInFormData | SignUpFormData) =>
  axios
    .post(url, data)
    .then((res) => res.data)
    .catch((error) => {
      if (error instanceof AxiosError) {
        console.error("Error creating new user:", error);
        throw new Error(error.response?.data.message || error.message);
      }
      throw error;
    });

export const usePost = (url: string) => {
  const { data, error, isError, isPending, isSuccess, mutate } = useMutation({
    mutationFn: (field?: SignUpFormData | SignInFormData | undefined) =>
      fetcher(url, field!),
    onSuccess: (data) => {
      console.log(data.data);
    },
    onError: (error) => {
      console.error(error);
      handlePostErrorToast(error?.message);
      throw error;
    },
  });

  return { data, error, isError, isPending, isSuccess, mutate };
};
