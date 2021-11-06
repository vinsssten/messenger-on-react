import React from "react";
import '../MainPage.css'

import MainCardTemplate from "../MainCardTemplate";
import ActionButtonMainCard from "./ActionButtonMainCard";

function ConnectedCard ({sessionID}) {


    return (
        <MainCardTemplate>
            <div className="mainPage_SessionID">
                Your ID : {sessionID}
            </div>
            <div className="mainPage_HintText">
                Tell this ID to your friend so that he 
                can send a request to create a chat
            </div>
            <ActionButtonMainCard
                action={() => console.log('click')}>
                    Start a chat!
            </ActionButtonMainCard>
            <ActionButtonMainCard
                action={() => console.log('click')}>
                    Find a random companion
            </ActionButtonMainCard>
        </MainCardTemplate>
    )
}

export default ConnectedCard