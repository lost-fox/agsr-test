import { createSlice } from "@reduxjs/toolkit";
import { DocsType } from "../interfaces/DocsType";

interface InitialStateType {
  docs: string | DocsType;
}

const initialState: InitialStateType = {
  docs: "",
};

const docsSlice = createSlice({
  name: "docs",
  initialState,
  reducers: {
    setDocs(state, action) {
      state.docs = action.payload;
    },
  },
});

export const { setDocs } = docsSlice.actions;
export default docsSlice.reducer;
