import { useSearchParams } from "react-router-dom";
import { FeaturedMenu as getSearchResults } from "../shop";

export const GlobalSearch = () => {
  const [searchParams] = useSearchParams();
  const queries = Object.fromEntries([...searchParams]);

  return (
    <main className="mx-5">
      {getSearchResults(
        `http://localhost:5000/api/meals/globalSearch?selectedModel=${queries.category}&searchTerm=${queries.searchTerm}`,
        `search-${queries.searchTerm}`
      )}
    </main>
  );
};
