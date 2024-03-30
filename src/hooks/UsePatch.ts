import { handleInfoToast, handlePostErrorToast } from "@/lib/utils";
import { SettingsFormData } from "@/types/types";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

const fetcher = (url: string, data?: SettingsFormData) =>
  axios
    .patch(url, data)
    .then((res) => res.data)
    .catch((error) => {
      if (error instanceof AxiosError) {
        console.error("Error updating profile:", error);
        throw new Error(error.response?.data.message || error.message);
      }
      throw error;
    });

export const usePatch = (url: string) => {
  const queryClient = useQueryClient();
  const { data, error, isError, isPending, isSuccess, mutate } = useMutation({
    mutationFn: (field?: SettingsFormData | undefined) => fetcher(url, field!),

    onSuccess: (data) => {
      console.log(data);
      handleInfoToast(data?.message);
      queryClient.invalidateQueries({ queryKey: ["userDetails"] });
    },
    onError: (error) => {
      console.error(error);
      handlePostErrorToast(error?.message);
      throw error;
    },
  });

  return { data, error, isError, isPending, isSuccess, mutate };
};
