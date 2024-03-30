// import { checkExistingCartItem } from "@/redux/cartSlice";
// import { useAppDispatch } from "@/redux/store";
// import { CartItem } from "@/types/types";
// import { useEffect } from "react";

// export const useIsInCart = (cart: CartItem[] | undefined) => {
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     if (cart) {
//       return cart.forEach((item) => dispatch(checkExistingCartItem(item)));
//     }
//   }, [cart, dispatch]);
//   return null;
// };
