import {
  RefetchOptions,
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";

const fetcher = (url: string) =>
  axios
    .get(url)
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error in fetcher:", error);
      throw error;
    });

export const useFetch = <T,>(
  url: string,
  queryKey: string ,
  refetch_Interval: boolean = false,
  id?: string
): {
  data: T | undefined;
  isLoading: boolean;
  error: Error | null;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<UseQueryResult<T, Error>>;
} => {
  const { isLoading, error, data, refetch } = useQuery<T>({
    queryKey: [queryKey, id],
    queryFn: () => fetcher(url),
    retry: 3,
    staleTime: 0,
    refetchOnWindowFocus: false,
    refetchInterval: refetch_Interval ? 3000 : false,
    refetchIntervalInBackground: true,
  });

  return { isLoading, error, data, refetch };
};
