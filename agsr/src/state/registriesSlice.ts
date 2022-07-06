import { createSlice } from "@reduxjs/toolkit";
import { RegistriesType } from "../interfaces/RegistriesType";

interface InitialStateType {
  registries: string | RegistriesType;
}

const initialState: InitialStateType = {
  registries: "",
};

const registriesSlice = createSlice({
  name: "registries",
  initialState,
  reducers: {
    setRegistries(state, action) {
      state.registries = action.payload;
    },
  },
});

export const { setRegistries } = registriesSlice.actions;
export default registriesSlice.reducer;
