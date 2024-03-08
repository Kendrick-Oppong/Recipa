import {
  ButtonLink,
  ErrorMessage,
  ImagePlaceholderSkeleton,
  LazyImage,
  LoadingSkeleton,
  ToolTip,
} from "@/components/shared";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { useFetch } from "@/hooks";
import {
  addToCart,
  checkExistingCartItem,
  getAllCartData,
  removeFromCart,
} from "@/redux/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { CartItem, MenuProps } from "@/types/types";
import { DollarSign, ShoppingBasket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const FeaturedMenu = (url: string, queryKey: string, id?: string) => {
  const { data, isLoading, error } = useFetch<MenuProps>(url, queryKey, id);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(getAllCartData);

  const handleAddToCart = (menu: CartItem) => {
    dispatch(addToCart(menu));
    dispatch(checkExistingCartItem(menu));
  };

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
    <div className="mt-10 grid auto-fit-menu gap-4 ">
      {data?.data?.map((menu) => (
        <div
          key={menu._id}
          className="relative shadow-2xl border-green-600 rounded-lg border p-3 pb-16"
        >
          <Link to={`/all-menus/${menu.category}/${menu.title}/${menu._id}`}>
            <LazyImage
              src={menu?.image}
              alt={menu.title}
              className="mx-auto !h-[250px] object-scale-down lg:scale-[0.8]"
              placeholder={<ImagePlaceholderSkeleton />}
            />
          </Link>

          <div className="font-bold text-center">
            <Link to={`/all-menus/${menu.category}/${menu.title}/${menu._id}`}>
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
          <div className="flex justify-between items-center absolute bottom-0 left-0 right-0 w-[92%] mx-auto mb-4">
            <p className="text-2xl ml-3 font-extrabold text-red-500">
              <DollarSign
                strokeWidth={2}
                className="inline-block -translate-y-[2px]"
              />
              {menu.price}
            </p>
            <div>
              <Drawer direction="bottom">
                {cartItems?.find((cartItem) => cartItem._id === menu._id) ? (
                  <Button
                    variant={"destructive"}
                    className="text-base dark:bg-red-500"
                    onClick={() => dispatch(removeFromCart(menu))}
                  >
                    Remove
                  </Button>
                ) : (
                  <div className="hover:bg-red-500 bg-green-500 p-2 px-3 rounded-lg">
                    <DrawerTrigger>
                      <ToolTip tooltip="Add to cart">
                        <ShoppingBasket
                          className="text-white h-8 w-8 cursor-pointer"
                          onClick={() => handleAddToCart(menu)}
                        />
                      </ToolTip>
                    </DrawerTrigger>
                  </div>
                )}

                <DrawerContent className="mx-auto pb-5">
                  <div className="w-[80%]  md:w-[70%] lg:w-1/3  border border-green-600 mt-2 p-4 rounded-lg mx-auto">
                    <LazyImage
                      src={menu?.image}
                      alt={menu.title}
                      className="mx-auto !h-[250px] object-scale-down lg:scale-[0.8]"
                      placeholder={<ImagePlaceholderSkeleton />}
                    />
                    <div className="font-bold text-center">
                      <h3>{menu.title}</h3>
                    </div>
                    <div className="text-lg my-1">
                      <div className="flex justify-center items-center">
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
                    </div>
                    <div className="flex justify-between text-2xl my-2 font-extrabold">
                      <p>Subtotal</p>
                      <p className="text-red-500">
                        <small> 1 X </small>
                        {""}
                        {menu.price}
                        <DollarSign
                          strokeWidth={2}
                          className="inline-block -translate-y-[2px]"
                        />
                      </p>
                    </div>
                    <div>
                      <Link to="/all-menus/cart">
                        <ButtonLink
                          type="button"
                          className="hover:!bg-red-500 w-full"
                        >
                          <ShoppingBasket className="mr-2 " />
                          View Cart
                        </ButtonLink>
                      </Link>
                      <ButtonLink
                        type="button"
                        className="hover:!bg-red-500 w-full mt-2"
                      >
                        Continue to checkout
                      </ButtonLink>
                    </div>
                  </div>
                  <DrawerFooter className="p-0 pt-2 w-[80%] md:w-[70%] lg:w-1/3 mx-auto">
                    <DrawerClose asChild>
                      <Button variant="destructive" className="text-lg">
                        Cancel
                      </Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
