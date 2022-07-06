import searchImg from "../../assets/icon/search.svg";
import { SearchProps } from "../../interfaces/SearchProps";

export const Search = (props: SearchProps) => {
  const { divClassName, imgClassName, inputClassName, placeholder, children } =
    props;
  return (
    <div className={divClassName}>
      <img className={imgClassName} src={searchImg} alt="search icon" />
      <input
        className={inputClassName}
        type="search"
        name="search"
        id="search"
        placeholder={placeholder}
      />
      {children}
    </div>
  );
};
