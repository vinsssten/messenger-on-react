import React from 'react'
import '../ChatModal.css'

function MessageCard({isLeftSide, text, time}) {
    return (
        <div className="messageList_MessageCard">
            <div className="messageCard_MessageInfo">
                {time}
            </div>
            <div className={isLeftSide ? "messageList_ClientMessage" : "messageList_CompanionMessage"}>
                {text}
            </div>
        </div>
    )
}

export default MessageCard
