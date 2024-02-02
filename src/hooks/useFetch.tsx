import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useFetch = <T,>(
  url: string,
  queryKey: string,
  id?: string
): {
  data: T | undefined;
  isLoading: boolean;
  error: Error | null;
} => {
  const { isLoading, error, data } = useQuery<T>({
    queryKey: [queryKey, id],
    queryFn: () => fetcher(url),
  });

  return { isLoading, error, data };
};
