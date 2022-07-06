import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_DOCS } from "../constants";
import { DocsType } from "../interfaces/DocsType";

interface InitialStateType {
  docs: DocsType[];
}

const initialState: InitialStateType = {
  docs: INITIAL_DOCS,
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
