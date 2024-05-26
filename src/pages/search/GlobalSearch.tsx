import { useSearchParams } from "react-router-dom";
import { FeaturedMenu as getSearchResults } from "../shop";
import { BACKEND_URL } from "@/constants/constants";

export const GlobalSearch = () => {
  const [searchParams] = useSearchParams();
  const queries = Object.fromEntries([...searchParams]);

  return (
    <main className="mx-5">
      {getSearchResults(
        `${BACKEND_URL}/api/meals/globalSearch?selectedModel=${queries.category}&searchTerm=${queries.searchTerm}`,
        `search-${queries.searchTerm}`
      )}
    </main>
  );
};
