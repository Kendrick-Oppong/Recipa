import { getMenuItemQuantity } from "@/redux/menuQuantitySlice";
import { useAppSelector } from "@/redux/store";
import { CartItem } from "@/types/types";

export const useCartItemSubtotal = (cartItem: CartItem) => {
  const quantity = useAppSelector((state) =>
    getMenuItemQuantity(state, cartItem._id!)
  );
  const price = cartItem.price ?? 0;
  const subtotal = price * quantity;
  return (subtotal).toFixed(2);
};
