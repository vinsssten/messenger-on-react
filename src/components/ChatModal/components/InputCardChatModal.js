import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function InputCardChatModal() {
    const {socket, isSocketConnected} = useSelector(state => state.socket)
    const [messageValue, setMessageValue] = useState('');

    function onChangeMessage (event) {
        const value = event.target.value;
        setMessageValue(value);
        console.log(value)
    }

    function sendMessage () {
        try {
            socket.emit('sendMessage', messageValue);
            setMessageValue('');
        } catch (err) {
            console.log('error while send message', err)
        }
    }


    //FIXME: Сделать отправку менее кривой
    function enterPressHandler (event) {
        if (event.keyCode === 13) {
            sendMessage()
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
