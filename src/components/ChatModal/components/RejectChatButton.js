import React from 'react'
import { useSelector } from 'react-redux'
import '../ChatModal.css'

function RejectChatButton({isRejected}) {
    const {socket} = useSelector(state => state.socket)

    function rejectChat () {
        if (window.confirm('Are you sure to close chat?')) {
            socket.emit('closeChat');
        } else {
            return
        }
    }

    return (
        <div className="chatModal-RejectButtonContainer">
            {isRejected ?
                <></>
                :
                <div 
                    className="chatModal-RejectButton"
                    title="Reject chat"
                    onClick={rejectChat}>
                    ❌
                </div>
                }
            
        </div>
    )
}

export default RejectChatButton
