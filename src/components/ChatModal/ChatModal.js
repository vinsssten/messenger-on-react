import reactDom from 'react-dom'
import './ChatModal.css'

function ChatModal () {

    return reactDom.createPortal (
        <div className="chatModal_Background">
            <div className="chatModal_MainContainer">
                <h1>Chat Modal</h1>
            </div>
        </div>,
        document.getElementById('root')
    )
}

export default ChatModal