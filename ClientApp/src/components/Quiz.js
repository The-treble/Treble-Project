import React from 'react'
import {Background, Wrapper, Img, Buttons, Question, Answer, Previous, Next, Submit} from '../components-styles/Quiz-style'
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router'
import Alert from '@mui/material/Alert';
import Spinner from 'react-bootstrap/Spinner';


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
   
    const history = useHistory();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [answer, setAnswer] = useState("");
    const [alert, setAlert] = useState("");
    const [score, setScore] = useState(0);

    const [finalScreen, setFinalScreen] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(function (){
  
            setLoading(false);
                      
        }, 3000);
    }, [])

    const verifyAnswer = () => {
        if(answer === (Data[currentSlide].raspuns_corect)){
            setAlert("correct");
            setScore(score + 1);
        }else{
            setAlert("incorrect");
        }
        if(currentSlide !== Data.length - 1){
            setCurrentSlide(currentSlide + 1);
            setAnswer('');
        }else{
            setTimeout(function (){
  
                setFinalScreen(true);
                          
            }, 1000);
            setTimeout(function (){

                history.push('/games');

            }, 3000)
        }
    }

    return (
        <Background style={{backgroundImage: `url(https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`}}>
            {loading == true && 
                <Wrapper>
                    <div style={{height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Spinner animation="border" variant="light" />
                        <h2 style={{marginLeft: '15px', color: 'white'}}>Loading....</h2>
                    </div>
                </Wrapper>
            }
            
            {loading == false && 
                <Wrapper>
                    {finalScreen == false &&
                        <><div style={{ width: '110%', justifyContent: 'center', display: 'grid', marginTop: '50px' }}>
                            <h1 style={{ position: 'absolute', top: '450px', left: '200px', color: '#8FBC94', textShadow: '-0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.4px 0.4px 0 #000, 0.4px 0.4px 0 #000' }}>Questions: {currentSlide} / {Data.length}</h1>
                            <h1 style={{ position: 'absolute', top: '450px', right: '200px', color: '#8FBC94', textShadow: '-0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.4px 0.4px 0 #000, 0.4px 0.4px 0 #000' }}>Score: {score} / {Data.length}</h1>
                            <Img src={Data[currentSlide].poza} />
                            <Question><h6>{Data[currentSlide].mesaj}</h6></Question>
                        </div>
                        <div style={{ width: '75%', justifyContent: 'center', display: 'grid' }}>
                            <Answer value={answer} placeholder='Enter your answer here...' onChange={(e) => { setAnswer(e.target.value); console.log(answer); } }></Answer>
                            {(alert === "correct") ?
                                (
                                    <Alert severity="success" style={{ width: '150%', marginTop: '10px', height: '45px' }}>Your answer was correct!</Alert>
                                ) : ( <> </> )
                            }
                            {(alert === "incorrect") ?
                                (
                                    <Alert severity="error" style={{ width: '150%', marginTop: '10px', height: '45px' }}>Your answer was incorrect!</Alert>
                                ) : ( <> </> )
                            }
                        </div>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginLeft: '10px', marginTop: '-20px'}}> 
                            <Submit onClick={() => { verifyAnswer();}}>Submit </Submit>
                        </div>
                        </>
                }
                {finalScreen == true && 
                    <div style={{ width: '110%', height: '490px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                        <h1 style={{color: '#8FBC94'}}>Your score is {score} out of {Data.length}!</h1>
                    </div>
                }
                </Wrapper>
            }
        </Background>
    )
}

export default Quiz