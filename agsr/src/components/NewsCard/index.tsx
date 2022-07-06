import { NewsTypeProps } from "../../interfaces/NewsType";
import calendar from "../../assets/icon/notes-calendar.svg";
import "./style.css";

export const NewsCard: React.FC<NewsTypeProps> = (props) => {
  const { img_url, title, date, info } = props.value;

  return (
    <div className="news-card">
      <img
        className="news-card__img"
        src={process.env.PUBLIC_URL + img_url}
        alt="news image"
      />
      <p className="news-card__title">{title}</p>
      <div className="news-card__date flex">
        <img
          className="news-card__date-icon"
          src={calendar}
          alt="calendar icon"
        />
        <p className="news-card__date-text">{date}</p>
      </div>
      <p className="news-card__info">{info}</p>
    </div>
  );
};
