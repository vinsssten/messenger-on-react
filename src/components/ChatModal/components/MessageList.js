import React from 'react'

function MessageList ({messages}) {


    function renderMessages () {
        return messages.map((value, index) => {return (
            <div className="chatModal_MessageList-MessageLine">
                
            </div>
        )})
    }

    return (
        <div className="chatModal_MessageList">
            {renderMessages()}
        </div>
    )
}

export default MessageList
