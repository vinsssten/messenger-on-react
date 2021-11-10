import React from 'react'

function MessageCard({isLeftSide, text}) {
    return (
        <div className={isLeftSide ? "messageList_ClientMessage" : "messageList_CompanionMessage"}>
            {text}
        </div>
    )
}

export default MessageCard
