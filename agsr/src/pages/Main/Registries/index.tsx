import filterImg from "../../../assets/icon/filter.svg";
import threeDotsImg from "../../../assets/icon/three-dots-vertical.svg";
import arrowLeftRightImg from "../../../assets/icon/arrow-left-right.svg";
import upper2Arrow from "../../../assets/icon/upper-2-arrow.svg";
import { RegisrtiesEl } from "../../../models/registriesEl";
import "./style.css";
import { Registry } from "../../../components/Registry";
import { useAppSelector } from "../../../hooks/stateHooks";
import { RegistriesType } from "../../../interfaces/RegistriesType";
import ReactPaginate from "react-paginate";

export const Registries: React.FC = () => {
  const registries: RegistriesType[] = useAppSelector(
    (state) => state.registriesReducer.registries
  );

  return (
    <div className="registries-container">
      <div className="registries-title flex">
        <h2 className="registries-title__title">Реестры</h2>
        <div className="registries-title__filters flex">
          <button className="registries-title__filter">
            <img
              className="registries-title__filter-funnel"
              src={filterImg}
              alt="filter icon"
            />
          </button>
          <button className="registries-title__filter">
            <img
              className="registries-title__filter-three-dots"
              src={threeDotsImg}
              alt="three dots icon"
            />
          </button>
        </div>
      </div>
      <div className="registries-elements">
        <div className="registries-elements__categories flex">
          <div className="category category__buttons category__reg-number flex">
            <button className="category__button">
              <img
                className="category__button-icon"
                src={arrowLeftRightImg}
                alt="arrow left right icon"
              />
            </button>
            <div>{RegisrtiesEl.RegNumber}</div>
          </div>
          <div className="category category__buttons category__name-software flex">
            <button className="category__button">
              <img
                className="category__button-icon"
                src={arrowLeftRightImg}
                alt="arrow left right icon"
              />
            </button>
            <div>{RegisrtiesEl.NameSoftware}</div>
          </div>
          <div className="category category__class-code">
            {RegisrtiesEl.ClassCode}
          </div>
          <div className="category category__class-software">
            {RegisrtiesEl.ClassSoftware}
          </div>
          <div className="category category__date">{RegisrtiesEl.Date}</div>
          <div className="category category__url">{RegisrtiesEl.Url}</div>
        </div>
        <div className="registries-elements__registries">
          {registries.map((el) => (
            <Registry key={el.id} value={el} />
          ))}
        </div>
      </div>
      <div className="registries-pagination">
        <div className="pagination">
          <button
            style={{ transform: "rotate(-180deg)" }}
            className="pagination-arrow"
            disabled={true}
          >
            <img
              src={upper2Arrow}
              alt="upper two array icon"
              className="pagination-arrow__arrow"
            />
          </button>
          <ReactPaginate
            pageCount={113}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            previousLabel=" < "
            nextLabel=" < "
            breakLabel="..."
            containerClassName="pagination__pages"
            pageClassName="pagination-page"
            activeClassName="pagination-page--active"
            previousClassName="pagination-page__prev"
            breakClassName="pagination-page__break"
            nextClassName="pagination-page__next"
            disabledClassName="pagination-page--disabled"
          />
          <button
            style={{ transform: "rotate(0deg)" }}
            className="pagination-arrow"
          >
            <img
              src={upper2Arrow}
              alt="upper two array icon"
              className="pagination-arrow__arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
