import { handleInfoToast, handlePostErrorToast } from "@/lib/utils";
import {
  ContactUsFormData,
  SignInFormData,
  SignUpFormData,
} from "@/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

const fetcher = (
  url: string,
  data?: SignInFormData | SignUpFormData | ContactUsFormData
) =>
  axios
    .post(url, data)
    .then((res) => res.data)
    .catch((error) => {
      if (error instanceof AxiosError) {
        console.error("Error posting:", error);
        throw new Error(error.response?.data.message || error.message);
      }
      throw error;
    });

export const usePost = (url: string) => {
  const queryClient = useQueryClient();
  const { data, error, isError, isPending, isSuccess, mutate } = useMutation({
    mutationFn: (
      field?: SignUpFormData | SignInFormData | ContactUsFormData | undefined
    ) => fetcher(url, field!),
    onSuccess: (data) => {
      handleInfoToast(data?.message);
      queryClient.invalidateQueries({
        queryKey: ["isAuthenticated"],
      });
    },
    onError: (error) => {
      console.error(error);
      handlePostErrorToast(error?.message);
      throw error;
    },
  });

  return { data, error, isError, isPending, isSuccess, mutate };
};
