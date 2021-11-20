import React from 'react';
import '../ChatModal.css';

function MessageCard({ isLeftSide, text, time }) {
    return (
        <div className="messageList_MessageCard">
            <div className="messageCard_MessageInfo">{time}</div>
            <div
                className={
                    isLeftSide
                        ? 'messageList_CompanionMessage'
                        : 'messageList_ClientMessage'
                }
            >
                {text}
            </div>
        </div>
    );
}

export default MessageCard;
