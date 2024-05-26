import {
  RefetchOptions,
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query";
import axios, { AxiosError } from "axios";


const fetcher = (url: string) =>
  axios
    .get(url)
    .then((res) => res.data)
    .catch((error) => {
      if (error instanceof AxiosError) {
        console.error("Error fetching data:", error);
        throw new Error(error.response?.data.message || error.message);
      }
      throw error;
    });

export const useFetch = <T,>(
  url: string,
  queryKey: string,
  refetchInterval: boolean = false,
  id?: string
): {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<UseQueryResult<T, Error>>;
  fetchNextPage: () => void;
} => {
  const { data, isLoading, isError, error, refetch } = useQuery<T>({
    queryKey: [queryKey, id],
    queryFn: () => fetcher(url),
    retry: 3,
    staleTime: 0,
    refetchOnWindowFocus: false,
    refetchInterval: refetchInterval ? 3000 : false,
    refetchIntervalInBackground: true,
  });

  const fetchNextPage = () => {};

  return { data, isLoading, isError, error, refetch, fetchNextPage };
};
