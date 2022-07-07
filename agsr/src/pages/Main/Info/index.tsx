import mainImg from "../../../assets/img/info-background.png";
import { Search } from "../../../components/Search";
import "./style.css";

export const Info: React.FC = () => {
  return (
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
          <button className="button main-search__button">Искать</button>
        </Search>
      </div>
      <div className="main-info-right">
        <img src={mainImg} alt="main background img" />
      </div>
    </div>
  );
};
