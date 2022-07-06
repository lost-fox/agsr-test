import { createSlice } from "@reduxjs/toolkit";
import { NewsType } from "../interfaces/NewsType";

interface InitialStateType {
  news: string | NewsType;
}

const initialState: InitialStateType = {
  news: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews(state, action) {
      state.news = action.payload;
    },
  },
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
