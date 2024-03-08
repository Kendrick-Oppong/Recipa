import { ButtonLink } from "@/components/shared";
import { getAllCartData } from "@/redux/cartSlice";
import { useAppSelector } from "@/redux/store";
import { ShoppingBasket } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CartItem } from "@/types/types";
import { CartGrandTotal, CartItemRowDesktop, CartItemRowMobile } from ".";

export const Cart = () => {
  const cartItems = useAppSelector(getAllCartData);
  const [sumSubtotal, setSumSubtotal] = useState<number[]>([]);

  if (!cartItems.length)
    return (
      <div className="max-w-[95%] mx-auto text-center text-lg ">
        <img
          src="/shopping-basket-svgrepo-com.svg"
          className="mx-auto border border-green-600 p-5 rounded-full"
          alt=""
        />
        <div className="mt-2 mb-14">
          <p className="font-bold">Your cart is empty!</p>
          <p className="my-3">Browse our menu and discover our best deals</p>
          <Link to="/all-menus/burgers">
            <ButtonLink>
              <ShoppingBasket className="mr-1" />
              Start Shopping
            </ButtonLink>
          </Link>
        </div>
      </div>
    );

  return (
    <>
      <h3 className="max-w-[95%] mx-auto">
        Cart {cartItems.length > 1 ? "Items" : "Item"}{" "}
        <span className="text-red-500">({cartItems?.length})</span>
      </h3>
      <div className="w-full text-lg p-3 mb-10 border border-green-600 rounded-lg shadow-lg max-w-[97%] md:max-w-[95%] mx-auto">
        <table className="w-full">
          <thead className="bg-[#bebeac] dark:bg-muted h-12 text-left hidden md:table-header-group">
            <tr>
              <th>Action</th>
              <th className="pl-4">Image</th>
              <th className="pl-2">Item</th>
              <th className="pl-2">Category</th>
              <th className="pl-2">Price</th>
              <th className="pl-2 text-center">Quantity</th>
              <th className="pl-2">Subtotal</th>
            </tr>
          </thead>
          <tbody className="hidden md:table-header-group">
            {cartItems.map((cartItem: CartItem) => (
              <React.Fragment key={cartItem._id}>
                <CartItemRowDesktop
                  itemInCart={cartItem}
                  setSumSubtotal={setSumSubtotal}
                />
              </React.Fragment>
            ))}
          </tbody>
        </table>

        {cartItems.map((cartItem) => (
          <div
            className="md:hidden border border-green-600 rounded-lg px-2 pb-2 mb-5"
            key={cartItem._id}
          >
            <CartItemRowMobile itemInCart={cartItem} />
          </div>
        ))}
      </div>
      <h3 className="max-w-[95%] mx-auto">Order Summary</h3>
      <CartGrandTotal sumSubtotal={sumSubtotal} />
    </>
  );
};
