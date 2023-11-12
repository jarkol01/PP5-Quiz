import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import React, { useState, useEffect } from 'react';

interface IQuestion {
    question: string;
    answer: string;
}

interface IQuestionBar {
    url: string;
}

function QuestionBar(props: IQuestionBar) {
    const [data, setData] = useState([]);
    const [randomQuestion, setRandomQuestion] = useState<IQuestion | null>(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const [textFieldValue, setTextFieldValue] = useState("")

    useEffect(() => {
        fetch(props.url)
        .then(response => response.json())
        .then(data => {console.log(data); setData(data); setRandomQuestion(data[Math.floor(Math.random() * data.length)])})
    }, [props.url])

    const handleShuffle = () => {
        setShowAnswer(false);
        setTextFieldValue("")
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomQuestion(data[randomIndex]);
    }

    return (
        <>
            {randomQuestion ? (
                <>
                    <h1>{randomQuestion.question}</h1>
                    <TextField id="userInput" label="Twoja odpowiedź" variant="outlined" value={textFieldValue} onChange={ (newValue) => setTextFieldValue(newValue.target.value) } fullWidth/>
                    <div>
                        <Button variant="contained" color='primary' sx={{margin: '1rem'}} startIcon={<SendIcon/>} onClick={ () => setShowAnswer(!showAnswer) }>Sprawdź odpowiedź</Button>
                        <Button variant="contained" color='primary' sx={{margin: '1rem'}} startIcon={<ShuffleIcon/>} onClick={handleShuffle}>Wylosuj nowe pytanie</Button>
                    </div>
                        {
                            showAnswer ? (
                                <div>
                                    <h2>{randomQuestion['answer']}</h2>
                                </div>
                            ) : ''
                        }
                    
                </>
            ): <h1>Wczytywanie pytań...</h1>}
        </>
    );
}

export default QuestionBar