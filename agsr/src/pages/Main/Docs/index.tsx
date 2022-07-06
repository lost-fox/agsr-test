import { Doc } from "../../../components/Doc";
import { useAppSelector } from "../../../hooks/stateHooks";
import { DocsType } from "../../../interfaces/DocsType";
import "./style.css";

export const Docs: React.FC = () => {
  const docs: DocsType[] = useAppSelector((state) => state.docsReducer.docs);

  return (
    <div className="docs-container">
      <h2>Документы</h2>
      <p className="docs-title">
        Всего документов:{" "}
        <span className="docs-title__length">{docs.length}</span>
      </p>
      <div className="docs-elements">
        <div className="docs-elements__categories flex">
          <div className="docs-elements__category-category">Категория</div>
          <div className="docs-elements__category-title">Наименование</div>
          <div className="docs-elements__category-date">Дата</div>
          <div className="docs-elements__category-number">Номер</div>
          <div className="docs-elements__category-file flex">
            <svg
              width="18"
              height="18"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.8402 7.61328L17.2669 1.03996C16.6002 0.373291 15.6935 0 14.7469 0H8.89355C4.48022 0 0.893555 3.58667 0.893555 8V16C0.893555 20.4133 4.48022 24 8.89355 24H16.8936C21.3069 24 24.8936 20.4133 24.8936 16V10.1466C24.8936 9.19998 24.5202 8.29329 23.8536 7.62663L23.8402 7.61328ZM16.5469 4.09334L20.8002 8.34668H18.6802C17.5069 8.34668 16.5469 7.45335 16.5469 6.34668V4.09334ZM16.8802 21.32H8.88021C5.93354 21.32 3.54688 18.9333 3.54688 15.9867V7.98665C3.54688 5.03999 5.93354 2.65332 8.88021 2.65332H13.8669V6.34668C13.8669 8.92001 16.0269 11.0133 18.6669 11.0133H22.2002V15.9867C22.2002 18.9333 19.8135 21.32 16.8669 21.32H16.8802Z"
                fill="#009CB4"
              />
            </svg>
            <p>Содержание</p>
          </div>
        </div>
        {docs.map((el) => (
          <Doc key={el.id} value={el} />
        ))}
      </div>
    </div>
  );
};
