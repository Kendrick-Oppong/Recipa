import { Input } from "@/components/ui/input";
import { ButtonLink, QuantitySelector } from "@/components/shared";
import { getAllCartData, removeFromCart } from "@/redux/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ShoppingBasket, XCircle, DollarSign } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { CartItem } from "@/types/types";
import { useCartItemSubtotal as cartItemSubtotal } from "@/hooks";

export const Cart = () => {
  const cartItems = useAppSelector(getAllCartData);
  const dispatch = useAppDispatch();

  const totalSubtotal = cartItems.reduce(
    (acc, cartItem) => acc + Math.floor(parseFloat(cartItemSubtotal(cartItem))),
    0
  );

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
              <th></th>
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
                <tr>
                  <td>
                    <XCircle
                      className="w-8 h-8 text-red-500 cursor-pointer"
                      onClick={() => dispatch(removeFromCart(cartItem))}
                    />
                  </td>
                  <td>
                    <img src={cartItem.image} width={80} alt="" />
                  </td>
                  <td>{cartItem.title}</td>
                  <td>{cartItem.category}</td>
                  <td>
                    <DollarSign className="w-5 h-5 inline-flex -translate-y-[.3px]" />
                    {cartItem?.price}
                  </td>
                  <td>
                    <div className="flex items-center justify-between gap-5">
                      <QuantitySelector itemId={cartItem._id!} />
                    </div>
                  </td>
                  <td>
                    <DollarSign className="w-5 h-5 inline-flex -translate-y-[.3px]" />
                    {cartItemSubtotal(cartItem)}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>

        {cartItems.map((cartItem) => (
          <div
            className="md:hidden border border-green-600 rounded-lg px-2 pb-2 mb-5"
            key={cartItem._id}
          >
            <div className="flex justify-between items-center">
              <div>
                <img src={cartItem.image} alt="" width={95} height={95} />
              </div>
              <div>
                <h1 className="font-bold">{cartItem.title}</h1>
                <p className="text-red-600 flex items-center">
                  <DollarSign className="w-5 h-5" />
                  {cartItemSubtotal(cartItem) ?? cartItem.price}
                </p>
              </div>
            </div>
            <div className="flex justify-between flex-wrap gap-3">
              <p className=" text-red-700 flex items-center gap-1">
                <XCircle
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => dispatch(removeFromCart(cartItem))}
                />
                Remove
              </p>
              <div className="flex items-center justify-between gap-5">
                <QuantitySelector itemId={cartItem._id!} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full text-lg p-3 mb-10 border border-green-600 rounded-lg shadow-lg max-w-[97%] md:max-w-[95%] mx-auto">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="font-bold border border-gray-400">
                Subtotal ({cartItems?.length})
              </td>
              <td className="text-right border border-gray-400">
                <DollarSign className="w-5 h-5 inline-flex -translate-y-[.3px]" />
                {totalSubtotal}
              </td>
            </tr>
            <tr>
              <td className="font-bold border border-gray-400">Delivery fee</td>
              <td className="text-right border border-gray-400">
                <DollarSign className="w-5 h-5 inline-flex -translate-y-[.3px]" />
                {1.5 * cartItems?.length}
              </td>
            </tr>
            <tr>
              <td className=" border border-gray-400">
                <Input
                  type="text"
                  placeholder="Enter coupon code"
                  className="border-red-600 focus-visible:ring-red-400 "
                />
              </td>
              <td className="text-right border border-gray-400">
                <ButtonLink className="w-full">Apply coupon</ButtonLink>
              </td>
            </tr>
            <tr className="bg-grey">
              <td className="font-bold border border-gray-400 text-red-600">
                Total
              </td>
              <td className="text-right font-bold border border-gray-400 text-red-600">
                <DollarSign className="w-5 h-5 inline-flex -translate-y-[.3px]" />
                {totalSubtotal + 1.5 * cartItems?.length}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="w-full mt-5 ">
          <ButtonLink className="w-full">Proceed to checkout</ButtonLink>
        </div>
      </div>
    </>
  );
};
