export interface IQuestion {
  question: string;
  answer: string;
}

export type QuestionContextType = {
  questions: IQuestion[];
  setQuestions: (questions: IQuestion[]) => void;
  addQuestion: (question: IQuestion) => void;
}