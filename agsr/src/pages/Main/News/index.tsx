import { NewsCard } from "../../../components/NewsCard";
import { useAppSelector } from "../../../hooks/stateHooks";
import "./style.css";

export const News: React.FC = () => {
  const news = useAppSelector((state) => state.newsReducer.news);

  return (
    <div className="news-container">
      <h2>Новости реестра</h2>
      <div className="news-cards">
        {news.map((el) => (
          <NewsCard key={el.id} value={el} />
        ))}
      </div>
      <button className="button news-button">Показать все</button>
    </div>
  );
};
