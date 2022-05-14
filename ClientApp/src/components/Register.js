import React from 'react'
import {Link} from 'react-router-dom';
import {Background, RegisterBox, Input, Inputs, Button, ButtonLink} from '../components-styles/Register.style'

function Register() {
  return (
    <Background style={{backgroundImage: `url(https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`}}>
      <RegisterBox>
        <h2 style={{color: '#A0CED9', fontFamily: 'Impact', fontStyle: 'italic'}}>Sign up</h2>
        <form>
            <Inputs>
                <label htmlFor="register-email">Email</label>
                <Input type="text" placeholder="name@email.com" id="register-email" required/>
            </Inputs>
            <Inputs>
                <label htmlFor="register-username">Username</label>
                <Input type="password" placeholder="Password" id="register-username"required/>
            </Inputs>
            <Inputs>
                <label htmlFor="register-password">Password</label>
                <Input type="password" placeholder="Password" id="register-password"required/>
            </Inputs>
            <Inputs>
                <label htmlFor="register-confirm-password">Confirm Password</label>
                <Input type="password" placeholder="Password" id="register-confirm-password"required/>
            </Inputs>
            <span>
              <Link to="/login">Already have an account? Press to Sign In</Link>
            </span>
            <Button>
                <ButtonLink>Sign up</ButtonLink>
            </Button>
        </form>
      </RegisterBox>
    </Background>
  )
}

export default Register