import React from 'react'
import {Background, Wrapper, Img, Buttons, Question, Answer, Previous, Next, Submit} from '../components-styles/Quiz-style'
import {useState} from 'react'
import Alert from '@mui/material/Alert';


function Quiz() {

    let Data = [
        {
            poza: "https://images.pexels.com/photos/1003914/pexels-photo-1003914.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            mesaj: "message1",
            raspuns_corect: "ok"
        },
        {
            poza: "https://images.unsplash.com/photo-1530878955558-a6c31b9c97db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmljZXxlbnwwfHwwfHw%3D&w=1000&q=80",
            mesaj: "message2",
            raspuns_corect: "ok"

        },
        {
            poza: "http://images.huffingtonpost.com/2015-02-22-NiceGuysFinishFirstNiceisRightblog.jpg",
            mesaj: "message3",
            raspuns_corect: "ok"
        }
    ]
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const [answer, setAnswer] = useState("");
    const [alert, setAlert] = useState("");
    const [score, setScore] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState(0);
    const [finalScreen, setFinalScreen] = useState(false);


    const nextSlide = () => {
        if(currentSlide == (Data.length - 1)){
            setCurrentSlide(0);
        }else{
            setCurrentSlide(currentSlide + 1);
        }
        setAnswer("");
        console.log(score);
        setTimeout(function (){
  
            setAlert("");
                      
        }, 1000);
    }

    const prevSlide = () => {
        if(currentSlide == 0){
            setCurrentSlide(Data.length - 1);
        }else{
            setCurrentSlide(currentSlide - 1);
        }
        setAnswer("");
        setTimeout(function (){
  
            setAlert("");
                      
        }, 1000);
    }

    const verifyAnswer = () => {
        setAnsweredQuestions(answeredQuestions + 1);
        if(answer === (Data[currentSlide].raspuns_corect)){
            setAlert("correct");
            setScore(score + 1);
        }else{
            setAlert("incorrect");
        }
        if(answeredQuestions != Data.length - 1){
            nextSlide();
        }else{
            setTimeout(function (){
  
                setFinalScreen(true);
                          
            }, 1000);
        }
    }

    return (
        <Background style={{backgroundImage: `url(https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`}}>
                <Wrapper>
                {finalScreen == false &&
                    <><div style={{ width: '110%', justifyContent: 'center', display: 'grid' }}>
                        <Img src={Data[currentSlide].poza} />
                        <Question><h6>{Data[currentSlide].mesaj}</h6></Question>
                    </div><div style={{ width: '95%', justifyContent: 'center', display: 'grid', marginTop: '50px' }}>
                            <Answer value={answer} placeholder='Enter your answer here...' onChange={(e) => { setAnswer(e.target.value); console.log(answer); } }></Answer>
                            {(alert == "correct") ?
                                (
                                    <Alert severity="success"
                                        style={{ width: '150%', marginTop: '10px', height: '45px' }}>Your answer was correct!</Alert>
                                ) :
                                (
                                    <> </>
                                )}
                            {(alert == "incorrect") ?
                                (
                                    <Alert severity="error"
                                        style={{ width: '150%', marginTop: '10px', height: '45px' }}>Your answer was incorrect!</Alert>
                                ) :
                                (
                                    <> </>
                                )}
                        </div><Buttons>
                            <Previous onClick={prevSlide}> Previous </Previous>
                            <Submit onClick={() => {
                                verifyAnswer();
                            }}>Submit </Submit>
                            <Next onClick={nextSlide}> Next </Next>
                        </Buttons></>
                }
                {finalScreen == true && 
                    <div style={{ width: '110%', height: '490px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                        <h1 style={{color: '#8FBC94'}}>Your score is {score} out of {answeredQuestions}!</h1>
                    </div>
                }
                
                </Wrapper>
        </Background>
    )
}

export default Quiz