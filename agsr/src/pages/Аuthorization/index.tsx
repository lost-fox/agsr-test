import React, { useState } from "react";
import arrowLeftImg from "../../assets/icon/arrow-left.svg";
import { InputField } from "../../components/InputField";
import { USER_AUTH } from "../../constants";
import "./style.css";

export const Authorization = () => {
  const [isValidUserName, setValidUserName] = useState<boolean>(false);
  const [username, setUserName] = useState<string>("auth-input__input");
  const [errorUserName, setErrorUserName] = useState<boolean>(false);

  const [isValidPassword, setValidPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("auth-input__input");
  const [errorPassword, setErrorPassword] = useState<boolean>(false);

  const validUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value;
    if (username === USER_AUTH.login) {
      setUserName("auth-input__input auth-input__input--correct");
      setValidUserName(true);
      setErrorUserName(false);
    } else {
      setUserName("auth-input__input input--error");
      setValidUserName(false);
      setErrorUserName(true);
    }

    if (!username.length) {
      setUserName("auth-input__input");
      setErrorUserName(false);
      setValidUserName(false);
    }
  };

  const validPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    if (password === USER_AUTH.password) {
      setPassword("auth-input__input auth-input__input--correct");
      setValidPassword(true);
      setErrorPassword(false);
    } else {
      setPassword("auth-input__input input--error");
      setValidPassword(false);
      setErrorPassword(true);
    }

    if (!password.length) {
      setPassword("auth-input__input");
      setErrorPassword(false);
      setValidPassword(false);
    }
  };

  return (
    <>
      <div className="auth-container">
        <button className="go-to-main flex">
          <img
            className="go-to-main__icon"
            src={arrowLeftImg}
            alt="arrow left icon"
          />
          <p className="go-to-main__text">Главная</p>
        </button>
        <h2 className="auth-title">Авторизация</h2>
        <div className="auth-elements">
          <InputField
            labelClassName={
              errorUserName
                ? "auth-input__label label--error"
                : "auth-input__label"
            }
            inputClassName={username}
            imgClassName={
              isValidUserName
                ? "elements-inputs__icon--correct"
                : "elements-inputs__icon"
            }
            id="name"
            title="Имя"
            type="text"
            placeholder="Введите имя"
            onChange={validUserName}
            error={errorUserName ? "Неверное имя" : ""}
          />
          <InputField
            labelClassName={
              errorPassword
                ? "auth-input__label label--error"
                : "auth-input__label"
            }
            inputClassName={password}
            imgClassName={
              isValidPassword
                ? "elements-inputs__icon--correct"
                : "elements-inputs__icon"
            }
            id="password"
            title="Пароль"
            type="password"
            placeholder="Введите пароль"
            onChange={validPassword}
            error={errorPassword ? "Неверный пароль" : ""}
          />
          <div className="auth-elements-remember flex">
            <input type="checkbox" name="remember" id="remember" />
            <label
              className="auth-elements-remember__label"
              htmlFor="remember"
            ></label>
            <p className="auth-elements-remember__label">
              Запомнить меня на этом компьютере
            </p>
          </div>
          <button className="button auth-elements__button">Вход</button>
          <a className="auth-elements__link" href="#">
            Забыли свой пароль?
          </a>
        </div>
        <div className="auth-elements">
          <button className="auth-add-auth">
            Авторизация с использованием ЕС ИФЮЛ
          </button>
          <button className="auth-add-auth">
            Авторизация с использованием МСИ
          </button>
        </div>
        <div className="auth-create-accaunt">
          <p className="auth-create-accaunt__text">У вас нет аккаунта?</p>
          <a href="#" className="auth-create-accaunt__link">
            Нажмите сюда чтобы создать
          </a>
        </div>
      </div>
    </>
  );
};
