import { Link } from "react-router-dom";

interface Props {
  category: { name: string; icon: string };
}

export const FeaturedCategories = ({ category }: Props) => {
  return (
    <div className="flex place-items-center font-semibold w-[7rem] h-[7rem] sm:w-40 sm:h-40 rounded-full bg-grey text-center transition  hover:bg-green-200 cursor-pointer">
      <Link to={`/categories/${category.name}`} className="mx-auto">
        <div className="mx-auto">
          <img
            src={category.icon}
            width={60}
            height={60}
            alt={category.name}
          
          />
          <p className="dark:text-black">{category.name}</p>
        </div>
      </Link>
    </div>
  );
};

