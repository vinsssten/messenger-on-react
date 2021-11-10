import React from 'react'
import MessageCard from './MessageCard';

function MessageList ({messages}) {

    //TODO: Исправить отображение сообщений в неправильном порядке
    function renderMessages () {
        return messages.map((item, index) => {
            const defaultClassname = 'chatModal_MessageList-MessageLine ';
            const finalClassname = item.isClientMessage ? defaultClassname + "rightSideMessage" : defaultClassname + "leftSideMessage";

            return (
            <div 
                className={finalClassname}
                key={index}>
                <MessageCard
                    isLeftSide={!item.isClientMessage}
                    text={item.textMessage}
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
