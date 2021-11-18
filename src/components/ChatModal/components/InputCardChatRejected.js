import React from 'react'
import { useSelector } from 'react-redux'
import '../ChatModal.css'

function InputCardChatRejected() {
    const rejectedMessage = useSelector(state => state.chat.rejectedMessage)
    console.log('rejectedMessage')
    return (
        <>
            <div className="chatModal_InputMessageContainer rejected">
                {rejectedMessage}
            </div>
            <div className="chatModal_SendButtonContainer rejectedButton" />
        </>
    )
}

export default InputCardChatRejected
