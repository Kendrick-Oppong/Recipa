// {
//     "_id": "65bffd8575ea2e086a6d86cd",
//     "title": "The Sriracha Sunrise",
//     "rating": 4.6,
//     "image": "https://i.postimg.cc/GpNxVkP9/burger-3.png",
//     "description": "A juicy beef patty topped with a fried egg, sriracha mayo, crispy bacon, and cheddar cheese on a toasted brioche bun.",
//     "price": 11.49,
//     "category": "Burger"
// md: table - header - group;
// }

import { FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ButtonLink } from "@/components/ui/shared";
import { getAllCartData, removeFromCart } from "@/redux/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ShoppingBasket, XCircle, Minus, Plus, DollarSign } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const Cart = () => {
  const cartItems = useAppSelector(getAllCartData);
  const dispatch = useAppDispatch();

  if (!cartItems.length)
    return (
      <div className="max-w-[95%] mx-auto text-center text-lg ">
        <img
          src="/shopping-basket-svgrepo-com.svg"
          className="mx-auto border border-green-600 p-5 rounded-full"
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
            {cartItems.map((cartItem) => (
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
                    <DollarSign className="w-5 h-5 inline-flex" />
                    {cartItem.price}
                  </td>
                  <td>
                    <div className="flex items-center justify-between gap-5">
                      <div className="p-1 border border-green-600 rounded-md hover:border-red-600 hover:bg-red-500 hover:text-white">
                        <Minus />
                      </div>
                      <Input
                        type="number"
                        min={1}
                        max={100}
                        className="text-center border py-0 border-green-600"
                      />
                      <div className="p-1 border border-green-600 rounded-md hover:border-red-600  hover:bg-red-500 hover:text-white">
                        <Plus />
                      </div>
                    </div>
                  </td>
                  <td>
                    <DollarSign className="w-5 h-5 inline-flex" />
                    11.49
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
                  {cartItem.price}
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
                <div className="p-1 border border-green-600 rounded-md hover:border-red-600 hover:bg-red-500 hover:text-white">
                  <Minus />
                </div>{" "}
                <Input
                  type="number"
                  min={1}
                  max={100}
                  className="text-center border py-0 border-green-600"
                />
                <div className="p-1 border border-green-600 rounded-md hover:border-red-600  hover:bg-red-500 hover:text-white">
                  <Plus />
                </div>
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
              <td className="text-right border border-gray-400">5545</td>
            </tr>
            <tr>
              <td className="font-bold border border-gray-400">Delivery fee</td>
              <td className="text-right border border-gray-400">67</td>
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
            <tr>
              <td className="font-bold border border-gray-400 text-red-600">
                Total
              </td>
              <td className="text-right font-bold border border-gray-400 text-red-600">
                <DollarSign className="w-5 h-5 inline-flex" />
                787878
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

// {
//     "_id": "65c1902675ea2e086a4dac44",
//     "title": "Rainbow Delight Nigiri",
//     "rating": 4.7,
//     "image": "https://i.postimg.cc/43xTM8Hw/Rainbow-Delight-Nigiri.png",
//     "description": "Taste the rainbow with our Rainbow Delight Nigiri.",
//     "price": 21.99,
//     "category": "Sushi"
// }
