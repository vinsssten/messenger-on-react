import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import validator from 'validator';

function InputCardChatModal() {
    const {socket} = useSelector(state => state.socket)
    const [messageValue, setMessageValue] = useState('');

    function onChangeMessage (event) {
        const value = event.target.value;
        setMessageValue(value);
    }

    function sendMessage () {
        try {
            socket.emit('sendMessage', messageValue);
            setMessageValue('');
        } catch (err) {
            console.log('error while send message', err)
        }
    }

    function enterPressHandler (event) {
        const userParams = {ignore_whitespace:true};
        if (!validator.isEmpty(messageValue, userParams) && event.keyCode === 13) {
            event.preventDefault();
            sendMessage();
        }
    }

    //TODO: Сделать увеличение text-area при большом количестве символов
    return (
        <>
            <div className="chatModal_InputMessageContainer">
                <textarea
                    className="chatModal_MessageInput"
                    type="text"
                    placeholder="Input message..."
                    value={messageValue}
                    onChange={onChangeMessage}
                    onKeyDown={enterPressHandler}
                />
            </div>
            <div className="chatModal_SendButtonContainer">
                <div 
                    className="chatModal_SendButton"
                    onClick={sendMessage}
                    >
                    ✉
                </div>
            </div>
        </>
    )
}

export default InputCardChatModal
