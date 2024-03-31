import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface ProfileImage {
  profileImage: string;
}

const initialState: ProfileImage = {
  profileImage: "",
};

export const userProfileImageSliceSlice = createSlice({
  name: "userProfileImage",
  initialState,
  reducers: {
    storeUserProfileImage: (state, action: PayloadAction<string>) => {
      state.profileImage = action.payload;
    },
  },
});

export const { storeUserProfileImage } = userProfileImageSliceSlice.actions;

export const getUserProfileImage = (state: RootState) =>
  state.userProfileImage.profileImage;

export default userProfileImageSliceSlice.reducer;
