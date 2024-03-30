import { ButtonLink } from "@/components/shared";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
export const SearchBar = () => {
  return (
    <div className="text-lg z-[10001] mx-2 sm:mx-10 mt-2">
      <form className="flex gap-4 items-center">
        <div className="relative w-full">
          <Input
            type="search"
            placeholder="Search for free recipe or menu"
            className="w-full py-[22px] pl-12  dark:bg-background border border-green600"
          />
          <Search className="absolute left-4 top-2.5" />
        </div>
        <div className="hidden sm:inline-grid">
          <ButtonLink type="submit">
            <Search className="mr-2" />
            Search
          </ButtonLink>
        </div>
      </form>
    </div>
  );
};
