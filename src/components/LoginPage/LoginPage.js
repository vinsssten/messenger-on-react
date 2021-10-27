import React, { useState, useEffect } from "react";
import './LoginPage.css'

import RegistrationPage from "./RegistrationPage/RegistrationPage";

function LoginPage (props) {
    const [isRegisterPageActive, setIsRegisterPageActive] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    useEffect(() => {
        document.title = 'MoR: Login';
    }, [])

    function onTextInput (event) {
        const target = event.target;
        if (target.id === 'usernameSignIn') {
            setUsername(target.value)
        } else {
            setPassword(target.value)
        }
    }

    function loginClick (event) {
        console.log(username, password)
    }

    function registerClick (event) {
        setIsRegisterPageActive(!isRegisterPageActive);
    }

    if (!isRegisterPageActive) {
        return (
            <div className='login_MainContainer'>
                <div className='login_Container'>
                    <div className='login_ContentContainer'>
                        <h1 className='login_TextHeader'>Sign In to Messenger</h1>
                        <div className="login_Input-Container"> 
                            <input 
                                id='usernameSignIn'
                                className='login_Input' 
                                placeholder='Name' 
                                type ='email'    
                                onChange={onTextInput}
                            />
                            <input 
                                id='passwordSignIn'
                                className='login_Input' 
                                placeholder='Password' 
                                type='password' 
                                onChange={onTextInput}
                            />
                        </div>
                        <div className='login_SubmitButton' onClick={loginClick}>Sign In</div>
                        <h4 className='login-TextAdditional' onClick={registerClick}>Don't you have an account yet? Click and register!</h4>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <RegistrationPage 
                isRegisterPageActive={isRegisterPageActive} 
                setIsRegisterPageActive={setIsRegisterPageActive} 
            />
        )
    }
}

export default LoginPage
