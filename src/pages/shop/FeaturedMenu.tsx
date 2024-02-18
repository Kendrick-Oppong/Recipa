import {
  ErrorMessage,
  ImagePlaceholderSkeleton,
  LazyImage,
  LoadingSkeleton,
  ToolTip,
} from "@/components/ui/shared";
import { useFetch } from "@/hooks";
import { MenuProps } from "@/types/types";
import { DollarSign, Heart, ShoppingBasket } from "lucide-react";
import { Link } from "react-router-dom";

export const FeaturedMenu = (url: string, queryKey: string, id?: string) => {
  const { data, isLoading, error } = useFetch<MenuProps>(url, queryKey, id);

  if (isLoading)
    return (
      <div className="mt-10 m-4">
        <LoadingSkeleton layout="auto-fit-menu-skeleton" />
      </div>
    );

  if (error)
    return (
      <div className="mt-10 m-[6rem]">
        <ErrorMessage message={error?.message} />
      </div>
    );

  return (
    <div className="mt-10 grid auto-fit gap-4 md:px-16">
      {data?.data?.map((menu) => (
        <div
          key={menu._id}
          className="shadow-2xl border-green-600 rounded-lg border relative p-3 pb-10"
        >
          <div className="dark:text-black  absolute  right-4 top-3  ">
            <ToolTip tooltip="Add to wishlist">
              <Heart className="text-green hover:text-red-500 h-6 w-6 cursor-pointer" />
            </ToolTip>
          </div>
          <Link
            to={`/all-menus/${menu.category}/${menu.title}/${menu._id}`}
          >
            <LazyImage
              src={menu?.image}
              alt={menu.title}
              className="mx-auto !h-[250px] object-scale-down lg:scale-[0.8]"
              placeholder={<ImagePlaceholderSkeleton />}
            />
          </Link>

          <div className="font-bold text-center">
            <Link to={""}>
              <h3>{menu.title}</h3>
            </Link>
          </div>
          <div className="text-lg my-6">
            <div className="flex justify-center my-4 items-center">
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                {menu.rating}
              </p>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                out of
              </p>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                5
              </p>
            </div>

            <p className="text-center">
              {menu.description?.match(/\S+/g)?.slice(0, 8).join(" ")}
              ...
            </p>
          </div>
          <div className="flex justify-between items-center ">
            <p className="text-2xl ml-3 font-extrabold text-red-500">
              {menu.price}
              <DollarSign
                strokeWidth={2}
                className="inline-block -translate-y-[2px]"
              />
            </p>
            <div className="hover:bg-red-500 bg-green-500 p-2 rounded-lg">
              <ToolTip tooltip="Add to cart">
                <ShoppingBasket className="text-white h-8 w-8 cursor-pointer" />
              </ToolTip>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
