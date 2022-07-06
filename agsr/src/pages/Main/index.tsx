import mainImg from "../../assets/img/info-background.png";
import { Search } from "../../components/Search";
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
      <div className="main-info flex">
        <div className="main-info-left">
          <h1 className="main-info-left__title">
            РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ
          </h1>
          <p className="main-info-left__text">
            Единый реестр программ для электронных вычислительных машин и баз
            данных
          </p>
          <p className="main-info-left__text">
            Включено ПО в реестр:{" "}
            <span className="main-info-left__text--blue">13 438</span>
            <br />
            Правообладателей:{" "}
            <span className="main-info-left__text--blue">4 272</span>
          </p>
          <Search
            divClassName="main-search"
            imgClassName="main-search__icon"
            inputClassName="main-search__input"
            placeholder="Искать реестр..."
          >
            <button className="main-search__button">Искать</button>
          </Search>
        </div>
        <div className="main-info-right">
          <img src={mainImg} alt="main background img" />
        </div>
      </div>
      <Registries />
    </div>
  );
};
