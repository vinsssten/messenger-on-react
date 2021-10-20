import React, { useState, useEffect } from "react";
import './LoginPage.css'

function LoginPage (props) {
    useEffect(() => {
        document.title = 'MNR: Login';
    }, [])

    return (
        <div className='login_MainContainer'>
            <div className='login_Container'>
                <h1>Sign In to Messenger</h1>
            </div>
        </div>
    )
}

export default LoginPage
