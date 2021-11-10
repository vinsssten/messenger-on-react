import reactDom from 'react-dom'
import { useSelector } from 'react-redux';
import './ChatModal.css'
import InputCardChatModal from './components/InputCardChatModal';

import MessageList from './components/MessageList';

function ChatModal () {
    const chatIsActive = useSelector(state => state.chat.chatIsActive);
    const {nickname, idCompanion, messageList} = useSelector(state => state.chat);

    if (chatIsActive) {
        return reactDom.createPortal (
                <div className="chatModal_Background">
                    <div className="chatModal_MainContainer">
                        <div className="chatModal_Header">{nickname} ({idCompanion})</div>
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