import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_USER } from "../constants";
import { UserType } from "../interfaces/UserType";

interface InitialStateType {
  auth: boolean;
  user: UserType;
}

const initialState: InitialStateType = {
  auth: false,
  user: INITIAL_USER,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.auth = action.payload;
    },
    setUserData(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setAuth, setUserData } = userSlice.actions;
export default userSlice.reducer;
