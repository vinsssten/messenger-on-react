import reactDom from 'react-dom'
import { useSelector } from 'react-redux';
import './ChatModal.css'

import MessageList from './components/MessageList';

function ChatModal () {
    const chatIsActive = useSelector(state => state.app.chatIsActive);
    const messageList = useSelector(state => state.chat.messageList);

    if (chatIsActive) {
        return reactDom.createPortal (
                <div className="chatModal_Background">
                    <div className="chatModal_MainContainer">
                        <MessageList 
                            messages={messageList}
                        />
                    </div>
                </div>,
                document.getElementById('root')
            )
    } else {
        return (<></>)
    }
    
}

export default ChatModal