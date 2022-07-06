import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  auth: boolean;
  userName: string;
  avatar: string;
}

const initialState: InitialStateType = {
  auth: false,
  userName: "",
  avatar: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.auth = action.payload;
    },
  },
});

export const { setAuth } = userSlice.actions;
export default userSlice.reducer;
