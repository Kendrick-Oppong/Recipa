import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { handleInfoToast } from "@/lib/utils";
import { CartItem, CartState } from "@/types/types";

// Get cart items from localStorage, or initialize an empty array if it's null
const initialCart = localStorage.getItem("cartItems");

const initialState: CartState = {
  cart: initialCart ? JSON.parse(initialCart) : [],
  existingCart: {
    itemId: "",
    isExisting: false,
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItemIndex = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingItemIndex !== -1) {
        // If item already exists in the cart, update its quantity or any other relevant property
        state.cart[existingItemIndex] = action.payload;
      } else {
        state.cart.push(action.payload);
        localStorage.setItem("cartItems", JSON.stringify(state.cart));
      }
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload._id);
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
      handleInfoToast("Meal successfully removed from cart");
    },
    checkExistingCartItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      state.existingCart.isExisting = !!existingItem;
      state.existingCart.itemId = existingItem !== -1 ? action.payload._id : "";
    },
  },
});

export const { addToCart, removeFromCart, checkExistingCartItem } =
  cartSlice.actions;

export const getAllCartData = (state: RootState) => state.cart.cart;
export const getExistingCartItem = (state: RootState) =>
  state.cart.existingCart;

export default cartSlice.reducer;
