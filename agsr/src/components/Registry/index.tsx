import { RegistriesTypeProps } from "../../interfaces/RegistriesType";
import "./style.css";

export const Registry: React.FC<RegistriesTypeProps> = (props) => {
  const { id, title, code, class_software, date, url } = props.value;

  return (
    <div className="regictry flex">
      <div className="regictry__item regictry__reg-number">#{id}</div>
      <div className="regictry__item regictry__name-software">{title}</div>
      <div className="regictry__item regictry__class-code">{code}</div>
      <div className="regictry__item regictry__class-software">
        {class_software}
      </div>
      <div className="regictry__item regictry__date">{date}</div>
      <a className="regictry__item regictry__url" href={url}>
        Скачать
      </a>
    </div>
  );
};
