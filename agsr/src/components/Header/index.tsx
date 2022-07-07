import logoImg from "../../assets/img/logo.png";
import calendarImg from "../../assets/icon/notes-calendar.svg";
import userImg from "../../assets/icon/user-round.svg";
import arrowImg from "../../assets/icon/upper-arrow.svg";
import "./style.css";
import { Search } from "../Search";
import { useAppSelector } from "../../hooks/stateHooks";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../models/routes";
import { UserType } from "../../interfaces/UserType";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const isAuth: boolean = useAppSelector((state) => state.userReducer.auth);
  const user: UserType = useAppSelector((state) => state.userReducer.user);

  const { avatar, name, surname, notification } = user;

  const handlerButton = () => {
    isAuth ? navigate(Routes.Profile) : navigate(Routes.Auth);
  };

  const userAvatar = avatar.length ? process.env.PUBLIC_URL + avatar : userImg;
  const userName = name.length ? `${name} ${surname}` : "Вход в аккаунт";
  const classNotificationIcon = notification
    ? "header-notification__icon header-notification--active"
    : "header-notification__icon";
  const opacityCount = notification ? "1" : "0";

  return (
    <div className="header-container flex">
      <div className="header-left flex">
        <div className="header-logo">
          <img className="header-logo__img" src={logoImg} alt="logo" />
        </div>
        <Search
          divClassName="header-search"
          imgClassName="header-search__icon"
          inputClassName="header-search__input"
          placeholder="Поиск"
        />
      </div>
      <div className="header-right flex">
        <div className="header-calendar">
          <img
            className="header-calendar__icon"
            src={calendarImg}
            alt="calendar icon"
          />
        </div>
        <div className="header-notification">
          <div
            style={{ opacity: opacityCount }}
            className="header-notification__count"
          >
            {notification}
          </div>
          <svg
            className={classNotificationIcon}
            width="22"
            height="28"
            viewBox="0 0 22 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.6265 17.8133L20.8665 12.2666C20.2398 7.63994 16.6665 4.05328 12.3198 3.43994V2.01335C12.3198 1.28001 11.7198 0.680014 10.9865 0.680014C10.2532 0.680014 9.65317 1.28001 9.65317 2.01335V3.43994C5.30651 4.06661 1.75983 7.63994 1.11983 12.2666L0.359839 17.8133C0.159839 19.2533 0.586492 20.6933 1.53316 21.76C2.42649 22.7733 3.69317 23.3599 5.02651 23.3599H6.42651C6.71984 25.5866 8.61317 27.32 10.9198 27.32C13.2265 27.32 15.1198 25.5866 15.4132 23.3599H16.9198C18.2532 23.3599 19.5198 22.7733 20.4132 21.76C21.3598 20.68 21.7865 19.24 21.5865 17.8133H21.6265ZM10.9465 24.6667C10.1065 24.6667 9.41316 24.12 9.15983 23.3733H12.7332C12.4798 24.12 11.7865 24.6667 10.9465 24.6667ZM18.4398 20.0133C18.0532 20.4533 17.5198 20.7066 16.9465 20.7066H5.03983C4.4665 20.7066 3.9465 20.4667 3.5465 20.0133C3.11984 19.52 2.91983 18.84 3.01316 18.1733L3.77317 12.6266C4.27984 8.8533 7.3865 6 10.9998 6C14.6132 6 17.7065 8.8533 18.2265 12.6266L18.9865 18.1733C19.0798 18.84 18.8798 19.52 18.4532 20.0133H18.4398Z"
              fill="#676A71"
            />
          </svg>
        </div>
        <div className="header-line"></div>
        <div className="header-profile flex" onClick={handlerButton}>
          <div className="header-profile__avatar">
            <img src={userAvatar} alt="avatar icon" />
          </div>
          <div className="header-profile__title">{userName}</div>
          <div className="header-profile__arrow">
            <img src={arrowImg} alt="arrow icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
