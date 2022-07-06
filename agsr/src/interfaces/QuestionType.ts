export interface Questions {
  id: number;
  question: string;
  answer: string;
}

export interface QuestionType {
  questions: Questions[];
}
