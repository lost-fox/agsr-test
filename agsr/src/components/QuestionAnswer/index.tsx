import { QuestionsTypeProps } from "../../interfaces/QuestionType";
import "./style.css";

export const QuestionAnswer: React.FC<QuestionsTypeProps> = (props) => {
  const { question, answer } = props.value;

  return (
    <details>
      <summary>{question}</summary>
      {Array.isArray(answer) ? (
        answer.map((el, index) => (
          <p className="answer-text" key={index}>
            {el}
          </p>
        ))
      ) : (
        <p className="answer-text">{answer}</p>
      )}
    </details>
  );
};
