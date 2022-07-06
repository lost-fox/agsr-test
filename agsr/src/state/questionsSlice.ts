import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_QUESTION } from "../constants";
import { QuestionType } from "../interfaces/QuestionType";

interface InitialStateType {
  questions: QuestionType[];
}

const initialState: InitialStateType = {
  questions: INITIAL_QUESTION,
};

const questionsSlice = createSlice({
  name: " questions",
  initialState,
  reducers: {
    setQuestions(state, action) {
      state.questions = action.payload;
    },
  },
});

export const { setQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;
