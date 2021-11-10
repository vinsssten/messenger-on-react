import React from 'react'

function InputCardChatModal() {
    //TODO: Сделать увеличение text-area при большом количестве символов
    return (
        <>
            <div className="chatModal_InputMessageContainer">
                <textarea
                    className="chatModal_MessageInput"
                    type="text"
                    placeholder="Input message..."
                />
            </div>
            <div className="chatModal_SendButtonContainer">
                <div 
                    className="chatModal_SendButton"
                    onClick={() => {console.log('click')}}
                    >
                    ✉
                </div>
            </div>
        </>
    )
}

export default InputCardChatModal
