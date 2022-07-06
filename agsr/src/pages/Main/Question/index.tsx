import { QuestionAnswer } from "../../../components/QuestionAnswer";
import { useAppSelector } from "../../../hooks/stateHooks";
import "./style.css";

export const Questions: React.FC = () => {
  const questions = useAppSelector((state) => state.questionReducer.questions);

  return (
    <div className="questions-container flex">
      <h2>Вопрос-ответ</h2>
      <div className="question-answer">
        {questions.map((el) => (
          <QuestionAnswer key={el.id} value={el} />
        ))}
      </div>
    </div>
  );
};
