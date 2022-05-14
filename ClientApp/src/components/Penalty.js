import React, { useState, useEffect } from 'react'
import { Goalkeeper } from '../animated-resources/Goalkeeper';
import { Background } from '../components-styles/Penalty.style';
import '../animated-resources/animations.css'
import Spinner from 'react-bootstrap/Spinner';

export function Penalty(){
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(function (){
  
            setLoading(false);
                      
        }, 3000);
    }, [])

    return (
        <Background style={{backgroundImage: `url(https://images.unsplash.com/photo-1570277756464-146a053f8a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`}}>
            {loading === false && (
                <Goalkeeper/>
            )}
            {loading === true && (
                <><Spinner animation="border" variant="light" /><h2 style={{marginLeft: '15px', color: 'white'}}>Loading....</h2></>
            )}
        </Background>
    );

}
