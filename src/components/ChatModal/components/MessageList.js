import React from 'react'
import MessageCard from './MessageCard';

function MessageList ({messages}) {

    //TODO: Исправить отображение сообщений в неправильном порядке
    function renderMessages () {
        return messages.map((value, index) => {
            const defaultClassname = 'chatModal_MessageList-MessageLine ';
            const finalClassname = value.isClientMessage ? defaultClassname + "rightSideMessage" : defaultClassname + "leftSideMessage";

            return (
            <div className={finalClassname}>
                <MessageCard
                    isLeftSide={!value.isClientMessage}
                    text={value.textMessage}
                    />
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
