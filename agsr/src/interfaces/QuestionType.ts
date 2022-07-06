export interface QuestionType {
  id: number;
  question: string;
  answer: string | string[];
}

export interface QuestionsTypeProps {
  value: QuestionType;
}
