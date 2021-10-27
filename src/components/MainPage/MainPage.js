import React, {useState, useEffect} from 'react'
import './MainPage.css'

import MainPageBody from '../MainPageBody/MainPageBody'

function MainPage (props) {


    useEffect(() => {
        document.title = 'MoR: Main page';
    }, [])

    return (
        <div className="mainPage_Container">
            <div className="mainPage_Header">Messenger on React</div>
            <MainPageBody />
        </div>
    )   
}

export default MainPage