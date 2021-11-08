import React, { useState } from "react";
import '../MainPage.css'

import MainCardTemplate from "../MainCardTemplate";
import ActionButtonMainCard from "./ActionButtonMainCard";
import FindCompanionModal from "../../Modals/FindCompanionModal/FindCompanionModal";

function ConnectedCard ({sessionID}) {
    const [isActiveFindModal, setIsActiveFindModal] = useState(false)

    return (
        <>
            <MainCardTemplate>
                <div className="mainPage_SessionID">
                    Your ID : {!sessionID? "Loading..." : sessionID}
                </div>
                <div className="mainPage_HintText">
                    Tell this ID to your friend so that he 
                    can send a request to create a chat
                </div>
                <ActionButtonMainCard
                    action={() => setIsActiveFindModal(!isActiveFindModal)}>
                        Start a chat!
                </ActionButtonMainCard>
                <ActionButtonMainCard
                    action={() => alert('Is under construction')}>
                        Find a random companion
                </ActionButtonMainCard>
            </MainCardTemplate>
            <FindCompanionModal 
                isActive={isActiveFindModal}
                setIsActive={setIsActiveFindModal}
            />
        </>
    )
}

export default ConnectedCard