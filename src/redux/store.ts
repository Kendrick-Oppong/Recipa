import { configureStore } from "@reduxjs/toolkit";
import sortQueryReducer from "./sortQuerySlice";
import menuQuantityReducer from "./menuQuantitySlice";
import userFormReducer from "./formSlice";
import cartReducer from "./cartSlice";
import userProfileImageSliceReducer from "./userProfileImageSlice";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {
    query: sortQueryReducer,
    menuQuantity: menuQuantityReducer,
    userForm: userFormReducer,
    cart: cartReducer,
    userProfileImage: userProfileImageSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
