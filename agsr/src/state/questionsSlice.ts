import { createSlice } from "@reduxjs/toolkit";
import { QuestionType } from "../interfaces/QuestionType";

interface InitialStateType {
  questions: string | QuestionType;
}

const initialState: InitialStateType = {
  questions: "",
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
