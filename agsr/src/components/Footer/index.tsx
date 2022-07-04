import logoImg from "../../assets/img/logo.png";
import "./style.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top flex">
        <div className="footer-general-info">
          <img
            src={logoImg}
            alt="logo icon"
            className="footer-general-info__logo"
          />
          <p className="footer-general-info__text">
            Открытое акционерное общество «Реестр ПО» начало практическую
            деятельность с 1 марта 2014 г
          </p>
          <div className="footer-developer">
            <h4 className="footer-developer__title">Разработчик</h4>
            <p className="footer-developer__company">
              ОАО «Агентство сервисизации и реинжиниринга»
            </p>
            <p className="footer-developer__address">
              Минск, улица Клары Цеткин, 24
            </p>
          </div>
        </div>
        <div className="footer-info">
          <h3 className="footer-info__title">Информация</h3>
          <nav className="footer-info__menu">
            <ul>
              <li className="footer-info__menu-item">
                <a href="#">Реестры</a>
              </li>
              <li className="footer-info__menu-item">
                <a href="#">Новости</a>
              </li>
              <li className="footer-info__menu-item">
                <a href="#">Документы</a>
              </li>
              <li className="footer-info__menu-item">
                <a href="#">Вопросы</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-support">
          <h3 className="footer-support__title">Техническая поддержка</h3>
          <p className="footer-support__info">
            Ежедневно с 8.00 до 19.00, за исключением выходных (суббота,
            воскресенье) и праздничных дней.
          </p>
          <hr className="footer-hr" />
          <a className="footer-data" href="tel:+375 25 111 22 33 ">
            +375 25 111 22 33
          </a>
          <a className="footer-data" href="tel:+375 29 222 44 55">
            +375 29 222 44 55
          </a>
          <a className="footer-data" href="mailto:ReestrPOsupport@mail.ru">
            ReestrPOsupport@mail.ru
          </a>
        </div>
        <div className="footer-contacts">
          <h3 className="footer-contacts__title">Контакты</h3>
          <a className="footer-data" href="tel:+375 25 111 22 33 ">
            +375 25 111 22 33
          </a>
          <a className="footer-data" href="tel:+375 29 222 44 55">
            +375 29 222 44 55
          </a>
          <a className="footer-data" href="mailto:ReestrPOsupport@mail.ru">
            ReestrPOsupport@mail.ru
          </a>
          <p className="footer-data">220004 г. Минск, ул. Карла Маркса, 38</p>
          <a href="#" className="footer-contacts__link">
            Связаться с поддержкой
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr className="footer-hr" />
        <p className="footer-copyright__text">
          © Copyright 2022 — ОАО «РеестрПО». Все права защищены.
        </p>
      </div>
    </div>
  );
};
