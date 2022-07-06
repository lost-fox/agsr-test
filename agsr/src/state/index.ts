import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import registriesReducer from "./registriesSlice";
import newsReducer from "./newsSlice";
import docsReducer from "./docsSlice";
import questionReducer from "./questionsSlice";

const rootReducer = combineReducers({
  userReducer,
  registriesReducer,
  newsReducer,
  docsReducer,
  questionReducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
