import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import React, { useState, useEffect } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";

interface IQuestion {
  question: string;
  answer: string;
}

interface IQuestionBar {
  categoryID: string;
}

function QuestionBar({ categoryID }: IQuestionBar) {
  const [data, setData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState<IQuestion | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [textFieldValue, setTextFieldValue] = useState("");

  const fetchQuestions = async () => {
    const categoryDoc = await getDoc(doc(db, "categories", categoryID));
    await getDocs(collection(categoryDoc.ref, "questions")).then((querySnapchot) => {
      const newData: any = querySnapchot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setData(newData);
    });
  };

  const setRandomQuestion = () => setCurrentQuestion(data[Math.floor(Math.random() * data.length)]);

  const handleShuffle = () => {
    setShowAnswer(false);
    setTextFieldValue("");
    setRandomQuestion();
  };

  useEffect(() => {
    fetchQuestions();
  }, [categoryID]);

  useEffect(() => {
    setRandomQuestion();
  }, [data]);

  return (
    <>
      {currentQuestion ? (
        <>
          <h1>{currentQuestion.question}</h1>
          <TextField
            id="userInput"
            label="Twoja odpowiedź"
            variant="outlined"
            value={textFieldValue}
            onChange={(newValue) => setTextFieldValue(newValue.target.value)}
            fullWidth
          />
          <div>
            <Button
              variant="contained"
              color="primary"
              sx={{ margin: "1rem" }}
              startIcon={<SendIcon />}
              onClick={() => setShowAnswer(!showAnswer)}
            >
              Sprawdź odpowiedź
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ margin: "1rem" }}
              startIcon={<ShuffleIcon />}
              onClick={handleShuffle}
            >
              Wylosuj nowe pytanie
            </Button>
          </div>
          {showAnswer ? (
            <div>
              <h2>{currentQuestion["answer"]}</h2>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        <h1>Wczytywanie pytań...</h1>
      )}
    </>
  );
}

export default QuestionBar;
