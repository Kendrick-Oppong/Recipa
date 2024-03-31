import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: localStorage.getItem("_auth") === "true",
};

export const isAuthenticatedSlice = createSlice({
  name: "isAuthenticated",
  initialState,
  reducers: {
    storeAuthValue: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
      localStorage.setItem("_auth", JSON.stringify(action.payload)); 
    },
    signOut: (state) => {
      state.isAuthenticated = false;
      localStorage.setItem("_auth", JSON.stringify(false));
    },
  }, 
});

export const { storeAuthValue, signOut } = isAuthenticatedSlice.actions;

export const getIsAuthenticated = (state: RootState) =>
  state.isAuthenticated.isAuthenticated;

export default isAuthenticatedSlice.reducer;

