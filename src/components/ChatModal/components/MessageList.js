import React from 'react'
import MessageCard from './MessageCard';

function MessageList ({messages}) {

    //TODO: Сделать отображение через map, менее костыльно
    
    function renderMessages () {
        const messageList = [];

        for (let i = 0; i < messages.length; i++) {
            const curIndex = messages.length - i - 1;
            const item = messages[curIndex];
            const defaultClassname = 'chatModal_MessageList-MessageLine ';
            const finalClassname = item?.isClientMessage ? defaultClassname + "rightSideMessage" : defaultClassname + "leftSideMessage";

            messageList.push(
                <div 
                    className={finalClassname}
                    key={i}>
                    <MessageCard
                        isLeftSide={!item.isClientMessage}
                        text={item.textMessage}
                    />
                </div>
            );
        }

        return messageList
    }

    return (
        <div className="chatModal_MessageList">
            {renderMessages()}
        </div>
    )
}

export default MessageList
