// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { RootState } from "./store";

// const initialState: { [itemId: string]: number } = {};

// export const menuQuantitySlice = createSlice({
//   name: "menuQuantity",
//   initialState,
//   reducers: {
//     incrementQuantity: (state, action: PayloadAction<string>) => {
//       const itemId = action.payload;
//       state[itemId] = state[itemId] ? state[itemId] + 1 : 1;
//     },
//     decrementQuantity: (state, action: PayloadAction<string>) => {
//       const itemId = action.payload;
//       if (state[itemId] && state[itemId] >= 2) {
//         state[itemId] -= 1;
//       }
//     },
//     onChangeValue: (
//       state,
//       action: PayloadAction<{ itemId: string; value: number }>
//     ) => {
//       const { itemId, value } = action.payload;
//       state[itemId] = value;
//     },
//   },
// });

// export const { incrementQuantity, onChangeValue, decrementQuantity } =
//   menuQuantitySlice.actions;

// export const getMenuItemQuantity = (state: RootState, itemId: string) =>
//   state.menuQuantity[itemId];

// export default menuQuantitySlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { CartItem } from "@/types/types";

interface QuantityState {
  [itemId: string]: number;
}

interface MenuQuantityState {
  quantity: QuantityState;
  subtotal: number;
}

const initialState: MenuQuantityState = {
  quantity: {},
  subtotal: 0,
};

export const menuQuantitySlice = createSlice({
  name: "menuQuantity",
  initialState,
  reducers: {
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.quantity[itemId] = (state.quantity[itemId] || 0) + 1;
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      if (state.quantity[itemId] && state.quantity[itemId] >= 2) {
        state.quantity[itemId] -= 1;
      }
    },
    onChangeValue: (
      state,
      action: PayloadAction<{ itemId: string; value: number }>
    ) => {
      const { itemId, value } = action.payload;
      state.quantity[itemId] = value;
    },
    calculateSubtotal: (state) => {
      let total = 0;
      const cartItemsJson = localStorage.getItem("cartItems");
      if (cartItemsJson) {
        const cartItems = JSON.parse(cartItemsJson) as CartItem[];
        cartItems.forEach((item) => {
          const quantity = state.quantity[item._id ?? ""] || 0;
          total += (item.price ?? 0) * quantity;
        });
      }
      state.subtotal = total;
    },
  },
});

export const {
  incrementQuantity,
  onChangeValue,
  decrementQuantity,
  calculateSubtotal,
} = menuQuantitySlice.actions;

export const getMenuItemQuantity = (state: RootState, itemId: string) =>
  state.menuQuantity.quantity[itemId] || 1;

export const getTotalSubtotal = (state: RootState) =>
  state.menuQuantity.subtotal;

export default menuQuantitySlice.reducer;
