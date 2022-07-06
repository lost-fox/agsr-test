import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_NEWS } from "../constants";
import { NewsType } from "../interfaces/NewsType";

interface InitialStateType {
  news: NewsType[];
}

const initialState: InitialStateType = {
  news: INITIAL_NEWS,
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
