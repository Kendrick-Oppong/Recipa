import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { SignInFormData, SignUpFormData } from "@/types/types";


interface UserFormProps {
  signUpData: SignUpFormData;
  signInData: SignInFormData;
}

const initialState: UserFormProps = {
  signUpData: {
    username: "",
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  },
  signInData: {
    email: "",
    password: "",
  },
};
export const userFormSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<SignUpFormData>) => {
      state.signUpData = action.payload;
    },
    signIn: (state, action: PayloadAction<SignInFormData>) => {
      state.signInData = action.payload;
    },
  },
});

export const { signUp, signIn } = userFormSlice.actions;

export const getAllSignInData = (state: RootState) => state.userForm.signInData;
export const getAllSignUpData = (state: RootState) => state.userForm.signUpData;

export default userFormSlice.reducer;
