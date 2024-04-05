import { ButtonLink } from "@/components/shared";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { globalSearchCategory } from "@/constants/constants";
import { handleInfoToast, validateGlobalSearchForm } from "@/lib/utils";
import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  setShowSearchBar: (val: boolean) => void;
}

export const SearchBar = ({ setShowSearchBar }: SearchBarProps) => {
  const [{ categoryName, searchValue }, setSearchTerm] = useState({
    categoryName: "",
    searchValue: "",
  });
  const navigate = useNavigate();

  const handleGlobalSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateGlobalSearchForm(categoryName, searchValue)) {
      navigate(`/search?category=${categoryName}&searchTerm=${searchValue}`);
      setShowSearchBar(false);
    }
  };

  return (
    <div className="sm:flex items-center gap-4  text-lg z-[10001] mx-2 sm:mx-5 my-3 ">
      <div className="mb-4 sm:mb-0 basis-[9.2rem] sm:basis-[26rem] shadow-lg">
        <Select
          onValueChange={(val) =>
            setSearchTerm((prev) => {
              const updatedSearchTerm = {
                ...prev,
                categoryName: val,
              };
              handleInfoToast(
                `${updatedSearchTerm.categoryName} category selected`
              );
              return updatedSearchTerm;
            })
          }
        >
          <SelectTrigger className="py-[1.3rem]">
            <SelectValue placeholder="Search By" />
          </SelectTrigger>
          <SelectContent className=" z-[10001] border border-green600">
            <SelectGroup>
              {globalSearchCategory.map((searchCategory) => (
                <SelectItem value={searchCategory} key={searchCategory}>
                  <p className="text-black dark:text-white">
                    Search Category: {searchCategory}
                  </p>
                </SelectItem>
              ))}
              <SelectItem value="recipes">
                <p className="text-black dark:text-white">
                  Search Category: Free Recipes
                </p>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <form
        className="flex items-center w-full gap-4"
        onSubmit={(e) => handleGlobalSearch(e)}
      >
        <div className="relative w-full shadow-lg">
          <Input
            type="search"
            value={searchValue}
            onChange={(e) =>
              setSearchTerm((prev) => ({
                ...prev,
                searchValue: e.target.value,
              }))
            }
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
