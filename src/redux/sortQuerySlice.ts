import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface SortQueryProp {
  query: string;
}

const initialState: SortQueryProp = {
  query: "",
};

export const sortQuerySlice = createSlice({
  name: "sortQuery",
  initialState,
  reducers: {
    addSortQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { addSortQuery } = sortQuerySlice.actions;

export const getAllSortQuery = (state: RootState) => state.query.query;

export default sortQuerySlice.reducer;
