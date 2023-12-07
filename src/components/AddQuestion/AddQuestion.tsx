import {FormControl} from "@mui/material";
import TextField from "@mui/material/TextField";
import React, {useContext, useState} from "react";
import Button from "@mui/material/Button";
import {addDoc, collection, doc, getDoc} from "firebase/firestore";
import {db} from "../../Firebase";
import AddIcon from "@mui/icons-material/Add";
import {QuestionContext} from "../../context/questionContext";
import {QuestionContextType} from "../../@types/question";


interface AddQuestionInterface {
  categoryID: string
}

interface InputFormInterface {
  question: string
  answer: string
}

const defaultFormValue = {
  question: "",
  answer: "",
}

function AddQuestion({categoryID}: AddQuestionInterface) {
  const {addQuestion} = useContext(QuestionContext) as QuestionContextType
  const [formData, setFormData] = useState<InputFormInterface>(defaultFormValue);

  const handleChange = (e: any) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const postNewQuestion = async (data: InputFormInterface) => {
    const categoryDoc = await getDoc(doc(db, "categories", categoryID));
    await addDoc(collection(categoryDoc.ref, "questions"), formData)
      .then((r) => console.log("Added new question with ID:", r.id))
      .catch((e) => console.log("An error occurred while adding question:", e))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    void postNewQuestion(formData);
    addQuestion(formData);
    setFormData(defaultFormValue);
  }

  return (
    <FormControl sx={{margin: "5% auto", display: "inline-box"}}>
      <TextField name="question" value={formData.question} type="text" variant="outlined" label="Twoje pytanie"
                 onChange={handleChange} fullWidth sx={{margin: "1%"}}/>
      <TextField name="answer" value={formData.answer} type="text" variant="outlined" label="Twoja odpowiedź"
                 onChange={handleChange} fullWidth sx={{margin: "1%"}}/>
      <Button type="submit" variant="contained" color="success" startIcon={<AddIcon/>} sx={{margin: "1rem"}}
              onClick={handleSubmit}>Dodaj pytanie</Button>
    </FormControl>
  );
}

export default AddQuestion;
