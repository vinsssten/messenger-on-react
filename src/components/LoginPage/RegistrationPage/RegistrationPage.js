import { set } from "mongoose";
import React, { useState } from "react";
import validator from 'validator'
import '../LoginPage.css'

function RegistrationPage ({isRegisterPageActive, setIsRegisterPageActive}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');


    function onTextInput (event) {
        const target = event.target;

        if (target.id === 'usernameSignUp') {
            setUsername(target.value);
        } else if (target.id === 'passwordSignUp') {
            setPassword(target.value);
        } else {
            setRepeatPassword(target.value);
        }
    }

    function registerClick (event) {
        const userParams = {ignore_whitespace:true}
        const passwordParams = {min: 4, max: 16}
        if (!validator.isEmpty(username, userParams) && 
            validator.isLength(password, passwordParams) &&
            password === repeatPassword) {
            console.log('можно регистрироваться')
        } 
        
        if (password !== repeatPassword) {
            alert('Passwords don`t match')
        }
    }

    return (
        <div className='login_MainContainer'>
        <div className='login_Container'>
            <div className='login_ContentContainer'>
                <h1 className='login_TextHeader'>Sign Up to Messenger</h1>
                <div className="login_Input-Container"> 
                    <input id='usernameSignUp' className='login_Input'
                    placeholder='Name' type='email' 
                    onChange={onTextInput}
                    />
                    <input id='passwordSignUp' className='login_Input' 
                        placeholder='Password' type='password' 
                    onChange={onTextInput}
                    />
                    <input id='passwordRepeatSignUp' className='login_Input' 
                        placeholder='Repeat password' type='password' 
                    onChange={onTextInput}
                    />
                </div>
                <div className='login_SubmitButton' onClick={registerClick}>Sign Up</div>
                <h4 
                    className='login-TextAdditional'
                    style={{cursor: "default"}}
                        >All fields must be filled in, and the password cannot be shorter than 4 characters, and longer than 16</h4>
                <h4 
                    className='login-TextAdditional' 
                    onClick={() => setIsRegisterPageActive(!isRegisterPageActive)}
                        >Return to Sign In
                </h4>
            </div>
        </div>
    </div>
    )
}

export default RegistrationPage