import { useAppDispatch } from "../../hooks/stateHooks";
import { setRegistries } from "../../state/registriesSlice";
import registries from "../../data/registries.json";
import news from "../../data/news.json";
import docs from "../../data/docs.json";
import question from "../../data/question.json";
import "./style.css";
import { useEffect } from "react";
import { setNews } from "../../state/newsSlice";
import { setDocs } from "../../state/docsSlice";
import { setQuestions } from "../../state/questionsSlice";
import { Registries } from "./Registries";
import { News } from "./News";
import { Docs } from "./Docs";
import { Questions } from "./Question";
import { Info } from "./Info";

export const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setRegistries(registries));
    dispatch(setNews(news));
    dispatch(setDocs(docs));
    dispatch(setQuestions(question));
  }, [dispatch]);

  return (
    <div className="main-container">
      <Info />
      <Registries />
      <News />
      <Docs />
      <Questions />
    </div>
  );
};
