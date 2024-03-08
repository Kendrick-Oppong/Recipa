import { getMenuItemQuantity } from "@/redux/menuQuantitySlice";
import { useAppSelector } from "@/redux/store";
import { CartItem } from "@/types/types";
import { useMemo } from "react";

export const useCartItemSubtotal = (cartItem: CartItem) => {
  const quantity = useAppSelector((state) =>
    getMenuItemQuantity(state, cartItem._id!)
  );
  const price = cartItem.price ?? 0;
  const subtotal = useMemo(() => {
    return (price * quantity).toFixed(2);
  }, [price, quantity]);

  return Number(subtotal);
};
