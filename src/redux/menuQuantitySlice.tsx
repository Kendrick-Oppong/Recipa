import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface QuantityProp {
  quantity: number;
}

const initialState: QuantityProp = {
  quantity: 1,
};

export const menuQuantitySlice = createSlice({
  name: "menuQuantity",
  initialState,
  reducers: {
    incrementQuantity: (state) => {
      state.quantity += 1;
    },
    decrementQuantity: (state) => {
      if (state.quantity >= 2) state.quantity -= 1;
    },
    onChangeValue: (state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
    },
  },
});

export const { incrementQuantity, onChangeValue, decrementQuantity } =
  menuQuantitySlice.actions;

export const getAllMenuQuantity = (state: RootState) =>
  state.menuQuantity.quantity;

export default menuQuantitySlice.reducer;
