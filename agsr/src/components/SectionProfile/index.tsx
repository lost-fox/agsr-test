import { SectionProfileProps } from "../../interfaces/SectionProfileProps";
import "./style.css";

export const SectionProfile: React.FC<SectionProfileProps> = (props) => {
  const { img, title, onClick, exit, active, children } = props;
  const classExit = !!exit
    ? "profile-section__title profile-section__title--exit"
    : "profile-section__title";

  if (!!active) {
    return (
      <button className="profile-section profile-section--action flex">
        {children}
        <p className="profile-section__title profile-section__title--active">
          {title}
        </p>
      </button>
    );
  }
  return (
    <button className="profile-section flex" onClick={onClick}>
      <img className="profile-section__icon" src={img} alt="icon" />
      <p className={classExit}>{title}</p>
    </button>
  );
};
