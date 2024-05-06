import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ButtonLink,
  ErrorMessage,
  ImagePlaceholderSkeleton,
  LazyImage,
  QuantitySelector,
} from "@/components/shared";
import { useFetch } from "@/hooks";
import { CartItem, MenuDetailsProps } from "@/types/types";
import {
  DollarSign,
  Facebook,
  Twitter,
  Linkedin,
  ShoppingBasket,
} from "lucide-react";
import React, { Key } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";

import {
  addToCart,
  checkExistingCartItem,
  getAllCartData,
  removeFromCart,
} from "@/redux/cartSlice";
import { Button } from "@/components/ui/button";

export const MenuDetails = (url: string, queryKey: string, id?: string) => {
  const { data, isLoading, error, refetch } = useFetch<MenuDetailsProps>(
    url,
    queryKey,
    false,
    id
  );

  const dispatch = useAppDispatch();

  const cartItems = useAppSelector(getAllCartData);

  const handleAddToCart = (menu: CartItem) => {
    dispatch(addToCart(menu));
    dispatch(checkExistingCartItem(menu));
  };

  if (isLoading)
    return (
      <div
        role="output"
        className="mt-[2rem] my-20 max-w-[95%] mx-auto space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
      >
        <div className="flex items-center justify-center w-full h-48 bg-gray-400 rounded sm:w-96 dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="w-full">
          <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
          <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
          <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
          <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );

  if (error)
    return (
      <div className="mt-10 m-[3rem]">
        <ErrorMessage refetch={refetch} message={error?.message} />
      </div>
    );

  return (
    <>
      <div className="grid items-center gap-4 px-4 mt-3 mb-20 text-lg lg:grid-cols-2">
        {data?.data.map((menuDetail) => (
          <React.Fragment key={menuDetail._id}>
            <LazyImage
              src={menuDetail?.image}
              alt={menuDetail.title}
              className="w-80 lg:w-96 lg:mx-auto"
              tag={
                <p className="absolute top-5 right-[15%] px-5 py-2 text-white bg-red-500 rounded-md">
                  {menuDetail.category}
                </p>
              }
              placeholder={<ImagePlaceholderSkeleton className=" h-[26rem]" />}
            />

            <div className="pr-5">
              <h1 className="text-4xl font-bold">{menuDetail.title}</h1>

              <div className="flex items-center my-4">
                <svg
                  className="w-4 h-4 text-yellow-500 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-500 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-500 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-500 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-400 me-1 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="text-sm font-medium text-gray-500 ms-1 dark:text-gray-400">
                  {menuDetail.rating}
                </p>
                <p className="text-sm font-medium text-gray-500 ms-1 dark:text-gray-400">
                  out of
                </p>
                <p className="text-sm font-medium text-gray-500 ms-1 dark:text-gray-400">
                  5
                </p>
              </div>

              <p>{menuDetail.description}</p>

              <h2 className="text-red-500">
                <DollarSign
                  strokeWidth={2}
                  className="inline-block -translate-y-[4px] w-8 h-8"
                />
                {menuDetail.price}
              </h2>

              <div>
                <li className="list-disc">Express delivery</li>
                <li className="list-disc">
                  Order before noon for same day dispatch
                </li>
              </div>

              <p className="pb-6 my-4 text-green-600 border-b border-b-gray-500">
                {menuDetail.details?.quantityInStock} in stock (can be
                backordered)
              </p>

              <div className="flex flex-wrap justify-between gap-3">
                <div className="flex items-center justify-between gap-5">
                  <strong>QUANTITY:</strong>{" "}
                  <QuantitySelector itemId={menuDetail._id!} />
                </div>
                <div className="flex items-center gap-3">
                  {cartItems?.find(
                    (cartItem) => cartItem._id === menuDetail._id
                  ) ? (
                    <Button
                      variant={"destructive"}
                      className="text-lg dark:bg-red-500"
                      onClick={() => dispatch(removeFromCart(menuDetail))}
                    >
                      Remove from cart
                    </Button>
                  ) : (
                    <ButtonLink
                      type="button"
                      className="hover:!bg-red-500 hover:border-red-600"
                      onClick={() => handleAddToCart(menuDetail)}
                    >
                      <ShoppingBasket className="mr-2" /> Add to Cart
                    </ButtonLink>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <p>
                  <strong>CATEGORIES:</strong> {menuDetail.details?.category}
                </p>
                <p className="my-3">
                  <strong>TAG</strong>: {menuDetail.details?.tag}
                </p>
                <div>
                  <strong className="flex gap-2">
                    SHARE:
                    <div className="flex gap-2">
                      <Facebook
                        strokeWidth={1}
                        className="cursor-pointer hover:text-red-500"
                      />
                      <Twitter
                        strokeWidth={1}
                        className="cursor-pointer hover:text-red-500"
                      />
                      <Linkedin
                        strokeWidth={1}
                        className="cursor-pointer hover:text-red-500"
                      />
                    </div>
                  </strong>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      {data?.data.map((menuDetail) => (
        <div key={menuDetail.title} className="mb-10">
          <Tabs defaultValue="description" className="max-w-[90%] mx-auto">
            <TabsList className="flex-wrap w-full gap-10 border border-green600">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="additional_info">
                Additional Information
              </TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              <div className="mt-3 text-lg">
                {menuDetail.details?.fullDescription?.split(".").map(
                  (description: string, index: Key | null | undefined) =>
                    description.trim() && (
                      <p key={index!} className="mt-3 list-disc">
                        {description.trim()}
                      </p>
                    )
                )}
              </div>
            </TabsContent>
            <TabsContent value="additional_info">
              <div className="flex justify-between pb-3 mt-3 text-lg border-b border-b-gray-500">
                <p>
                  <strong>Weight</strong>
                </p>
                <p>{menuDetail.details?.weight}</p>
              </div>
              <div className="flex justify-between mt-3 text-lg">
                <p>
                  <strong>Dimension</strong>
                </p>
                <p>{menuDetail.details?.dimension}</p>
              </div>
            </TabsContent>
            <TabsContent value="reviews">
              <div className="flex justify-between mt-3 text-lg">
                <p>Customer Reviews</p>
                <p>No reviews found</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      ))}
    </>
  );
};
