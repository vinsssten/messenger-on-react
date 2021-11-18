import React from 'react'
import { useSelector } from 'react-redux'
import '../ChatModal.css'

function InputCardChatRejected() {
    console.log('rejectedMessage')
    return (
        <>
            <div className="chatModal_InputMessageContainer rejected">
                Chat was closed
            </div>
            <div className="chatModal_SendButtonContainer rejectedButton" />
        </>
    )
}

export default InputCardChatRejected
