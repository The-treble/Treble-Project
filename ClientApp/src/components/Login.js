import React from 'react'
import {Link} from 'react-router-dom';
import {Background, LogInBox, Input, Inputs, Button, ButtonLink} from '../components-styles/Login.style'

function Login() {
  return (
    <Background style={{backgroundImage: `url(https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`}}>
      <LogInBox>
        <h2 style={{color: '#A0CED9', fontFamily: 'Impact', fontStyle: 'italic'}}>Log in</h2>
        <form>
            <Inputs>
                <label htmlFor="login-email">Email</label>
                <Input type="text" placeholder="name@email.com" id="login-email" required/>
            </Inputs>
            <Inputs>
                <label htmlFor="login-password">Password</label>
                <Input type="password" placeholder="Password" id="login-password"required/>
            </Inputs>
            <span>
              <Link to="/register">Don't have an account? Sign Up</Link>
            </span>
            <Button>
                <ButtonLink>Log in</ButtonLink>
            </Button>
        </form>
      </LogInBox>
    </Background>
  )
}

export default Login