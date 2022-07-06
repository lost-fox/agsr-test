import { DocsTypeProps } from "../../interfaces/DocsType";
import "./style.css";

export const Doc: React.FC<DocsTypeProps> = (props) => {
  const { category, title, date, number, file } = props.value;

  return (
    <div className="doc flex">
      <div className="doc__category">{category}</div>
      <div className="doc__title">{title}</div>
      <div className="doc__date">{date}</div>
      <div className="doc__number">{number}</div>
      <a className="doc__file-link flex" href="#" download={true}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 22 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.79986 21.48C9.98652 21.6666 10.2132 21.7866 10.4532 21.8666C10.6265 21.9466 10.8132 22 11.0132 22C11.2132 22 11.3999 21.9466 11.5599 21.8666C11.7999 21.7866 12.0265 21.6666 12.2132 21.48L19.2132 14.4666C19.7332 13.9466 19.7332 13.1067 19.2132 12.5867C18.6932 12.0667 17.8532 12.0667 17.3332 12.5867L12.3599 17.5867V2.01335C12.3599 1.28001 11.7732 0.680014 11.0265 0.680014C10.2799 0.680014 9.69319 1.28001 9.69319 2.01335V17.5867L4.70652 12.5999C4.18652 12.0799 3.34652 12.0799 2.82652 12.5999C2.30652 13.1199 2.30652 13.96 2.82652 14.48L9.82652 21.4933L9.79986 21.48Z"
            fill="#009CB4"
          />
          <path
            d="M20.333 22C19.5997 22 18.9997 22.6 18.9997 23.3333C18.9997 24.2133 18.1997 24.68 17.453 24.68H4.51967C3.75967 24.68 2.99967 24.2133 2.99967 23.3333C2.99967 22.6 2.39967 22 1.66634 22C0.933008 22 0.333008 22.6 0.333008 23.3333C0.333008 25.5867 2.17301 27.3467 4.51967 27.3467H17.453C19.813 27.3467 21.6663 25.5867 21.6663 23.3333C21.6663 22.6 21.0663 22 20.333 22Z"
            fill="#009CB4"
          />
        </svg>
        <p>
          Скачать <br /> {file}
        </p>
      </a>
    </div>
  );
};
