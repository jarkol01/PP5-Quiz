import React, {ReactNode, useState} from "react";
import {IQuestion, QuestionContextType} from "../@types/question";

export const QuestionContext = React.createContext<QuestionContextType | null>(null);

interface QuestionProviderProps {
  children: ReactNode;
}

const QuestionProvider: React.FC<QuestionProviderProps> = ({ children }) => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const addQuestion = (question: IQuestion) => {
    setQuestions((prevData: IQuestion[]) => [...prevData, question])
  }

  return (
    <QuestionContext.Provider value={{ questions, setQuestions, addQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider