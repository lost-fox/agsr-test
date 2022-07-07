import { SectionProfile } from "../../components/SectionProfile";
import bellImg from "../../assets/icon/bell.svg";
import bookmarkImg from "../../assets/icon/note-bookmark.svg";
import paperImg from "../../assets/icon/paper.svg";
import lockImg from "../../assets/icon/lock-closed.svg";
import downloadImg from "../../assets/icon/download.svg";
import logoutImg from "../../assets/icon/logout.svg";
import eyeImg from "../../assets/icon/eye-slash.svg";
import upperArrowImg from "../../assets/icon/upper-arrow.svg";
import "./style.css";
import { SectionsProfile } from "../../models/sectionsProfile";
import { useAppDispatch, useAppSelector } from "../../hooks/stateHooks";
import { setAuth, setUserData } from "../../state/userSlice";
import { INITIAL_USER } from "../../constants";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../models/routes";
import { InputField } from "../../components/InputField";

export const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.userReducer.user);
  const { avatar, name, surname, patronymic, country, city, phote } = user;

  const urlAvatar = process.env.PUBLIC_URL + avatar;

  const handleExit = () => {
    dispatch(setAuth(false));
    dispatch(setUserData(INITIAL_USER));
    navigate(Routes.Main);
  };

  return (
    <div className="profile-container">
      <h2>Личный кабинет</h2>
      <div className="profile-content flex">
        <div className="profile-sections">
          <SectionProfile title={SectionsProfile.Data} active={true}>
            <svg
              width="20"
              height="26"
              viewBox="0 0 20 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0003 12.6667C13.307 12.6667 16.0003 9.97333 16.0003 6.66667C16.0003 3.36 13.307 0.666666 10.0003 0.666666C6.69366 0.666666 4.00033 3.36 4.00033 6.66667C4.00033 9.97333 6.69366 12.6667 10.0003 12.6667ZM10.0003 3.33333C11.8403 3.33333 13.3337 4.82667 13.3337 6.66667C13.3337 8.50667 11.8403 10 10.0003 10C8.16033 10 6.66699 8.50667 6.66699 6.66667C6.66699 4.82667 8.16033 3.33333 10.0003 3.33333Z"
                fill="#009CB4"
              />
              <path
                d="M14.0003 14H6.00033C3.05366 14 0.666992 16.3867 0.666992 19.3333V20.6667C0.666992 23.6133 3.05366 26 6.00033 26H14.0003C16.947 26 19.3337 23.6133 19.3337 20.6667V19.3333C19.3337 16.3867 16.947 14 14.0003 14ZM16.667 20.6667C16.667 22.1333 15.467 23.3333 14.0003 23.3333H6.00033C4.53366 23.3333 3.33366 22.1333 3.33366 20.6667V19.3333C3.33366 17.8667 4.53366 16.6667 6.00033 16.6667H14.0003C15.467 16.6667 16.667 17.8667 16.667 19.3333V20.6667Z"
                fill="#009CB4"
              />
            </svg>
          </SectionProfile>
          <SectionProfile img={bellImg} title={SectionsProfile.Notification} />
          <SectionProfile
            img={bookmarkImg}
            title={SectionsProfile.Registries}
          />
          <SectionProfile img={paperImg} title={SectionsProfile.Metadata} />
          <SectionProfile img={lockImg} title={SectionsProfile.Safety} />
          <SectionProfile img={downloadImg} title={SectionsProfile.Dowloands} />
          <SectionProfile
            img={logoutImg}
            title={SectionsProfile.SignOut}
            exit="--exit"
            onClick={handleExit}
          />
        </div>
        <div className="profile-data">
          <div className="profile-greetings flex">
            <img src={urlAvatar} alt="user avatar" />
            <p className="profile-greetings__title">Здравствуй, {name}!</p>
          </div>
          <h3 className="profile-data__title">Основные данные</h3>
          <div className="profile-data__elements">
            <InputField
              labelClassName="profile-data__elements-label"
              inputClassName="profile-data__elements-input"
              id="name"
              title="Имя"
              type="text"
              value={name}
            />
            <InputField
              labelClassName="profile-data__elements-label"
              inputClassName="profile-data__elements-input"
              id="surname"
              title="Фамилия"
              type="text"
              value={surname}
            />
            <InputField
              labelClassName="profile-data__elements-label"
              inputClassName="profile-data__elements-input"
              id="patronymic"
              title="Отчество"
              type="text"
              value={patronymic}
            />
            <InputField
              labelClassName="profile-data__elements-label"
              inputClassName="profile-data__elements-input"
              id="country"
              title="Страна"
              type="text"
              value={country}
            >
              <img
                style={{ transform: "rotate(-90deg)" }}
                src={upperArrowImg}
                alt="eye icon"
              />
            </InputField>
            <InputField
              labelClassName="profile-data__elements-label"
              inputClassName="profile-data__elements-input"
              id=" city"
              title="Город"
              type="text"
              value={city}
            >
              <img
                style={{ transform: "rotate(-90deg)" }}
                src={upperArrowImg}
                alt="eye icon"
              />
            </InputField>
            <InputField
              labelClassName="profile-data__elements-label"
              inputClassName="profile-data__elements-input"
              id="phote"
              title="Мобильный телефон"
              type="text"
              value={phote}
            />
          </div>
          <h3 className="profile-data__title profile-data__title--password">
            Пароль
          </h3>
          <div className="profile-data__elements">
            <InputField
              labelClassName="profile-data__elements-label"
              inputClassName="profile-data__elements-input"
              id="password"
              title="Новый пароль"
              type="password"
              value="12345678"
            >
              <img src={eyeImg} alt="eye icon" />
            </InputField>
            <InputField
              labelClassName="profile-data__elements-label"
              inputClassName="profile-data__elements-input"
              id="password"
              title="Подтверждение пароля"
              type="password"
              value="12345678"
            >
              <img src={eyeImg} alt="eye icon" />
            </InputField>
          </div>
          <button className="button profile-button">Сохранить</button>
        </div>
      </div>
    </div>
  );
};
