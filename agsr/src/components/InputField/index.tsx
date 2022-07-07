import { InputFieldProps } from "../../interfaces/InputFieldProps";
import correctFieldImg from "../../assets/icon/correct-field.svg";
import "./style.css";

export const InputField: React.FC<InputFieldProps> = (props) => {
  const {
    labelClassName,
    imgClassName,
    inputClassName,
    id,
    title,
    type,
    placeholder,
    error,
    onChange,
  } = props;

  const imgClass = imgClassName ? imgClassName : "elements-inputs__icon";

  return (
    <div className="element-inputs">
      <input
        className={inputClassName}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
      <p className="element-inputs__error">{error}</p>
      <label className={labelClassName} htmlFor={id}>
        {title}
      </label>
      <img
        className={imgClass}
        src={correctFieldImg}
        alt="correct field icon"
      />
    </div>
  );
};
