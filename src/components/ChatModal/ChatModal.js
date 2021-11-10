import reactDom from 'react-dom'
import { useSelector } from 'react-redux';
import './ChatModal.css'
import InputCardChatModal from './components/InputCardChatModal';

import MessageList from './components/MessageList';

function ChatModal () {
    const chatIsActive = useSelector(state => state.app.chatIsActive);
    const messageList = useSelector(state => state.chat.messageList);

    if (chatIsActive) {
        return reactDom.createPortal (
                <div className="chatModal_Background">
                    <div className="chatModal_MainContainer">
                        <div className="chatModal_Header">Nickname (123123123)</div>
                        <MessageList 
                            messages={messageList}
                        />
                        <InputCardChatModal />
                        
                    </div>
                </div>,
                document.getElementById('root')
            )
    } else {
        return (<></>)
    }
    
}

export default ChatModal