import { createSlice } from "@reduxjs/toolkit";
import { RegistriesType } from "../interfaces/RegistriesType";
import { INITIAL_REGISTRIES } from "../constants";

interface InitialStateType {
  registries: RegistriesType[];
}

const initialState: InitialStateType = {
  registries: INITIAL_REGISTRIES,
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
