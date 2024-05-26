import { BACKEND_URL } from "@/constants/constants";
import { handleInfoToast, handlePostErrorToast } from "@/lib/utils";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

const fetcher = (url: string) =>
  axios
    .delete(`${BACKEND_URL}${url}`)
    .then((res) => res.data)
    .catch((error) => {
      if (error instanceof AxiosError) {
        console.error("Error deleting profile image:", error);
        throw new Error(error.response?.data.message || error.message);
      }
      throw error;
    });

export const useDelete = (url: string) => {
  const queryClient = useQueryClient();
  const { data, error, isError, isPending, isSuccess, mutate } = useMutation({
    mutationFn: () => fetcher(url),

    onSuccess: (data) => {
      handleInfoToast(data?.message);
      queryClient.invalidateQueries({
        queryKey: ["userDetails"],
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
