import React from 'react'
import { useState } from 'react';
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Logo} from '../components-styles/NavBar.style'
import LOGO from '../images/The-Treble-Logo.png'

function NavBar() {

    const [user, setUser] = useState();
    
    return (
        <Nav>
            <NavLink to='/'>
                <Logo style={{backgroundImage: `url(${LOGO})`}} />           
            </NavLink>

            <NavMenu>
                    <>
                    <NavLink to='/' activeStyle>Home</NavLink>
                    <NavLink to='/counter' activeStyle>Counter</NavLink>
                    <NavLink to='/fetch-data' activeStyle>Forecast</NavLink>
                    </>
               
                { (user) ? (
                    <NavBtn> 
                        <NavBtnLink to="/">Log Out</NavBtnLink>
                    </NavBtn>
                ) : (
                    <NavBtn>
                        <NavBtnLink to='/log-in'>Sign In</NavBtnLink>
                    </NavBtn>
                )}  
            </NavMenu>
        
        </Nav>
        
    )
}

export default NavBar