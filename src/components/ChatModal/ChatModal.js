import reactDom from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import closeChatModal from '../../lib/actionCreators/closeChatModal';
import './ChatModal.css';
import InputCardRouter from './components/InputCardRouter';

import MessageList from './components/MessageList';
import RejectChatButton from './components/RejectChatButton';

function ChatModal() {
    const chatIsActive = useSelector(state => state.chat.chatIsActive);
    const { nickname, idCompanion, messageList, chatIsRejected } = useSelector(
        state => state.chat,
    );
    const dispatch = useDispatch();

    function closeModalWindow(event) {
        const target = event.target;
        if (target.id === 'chatModal_Background' && chatIsRejected) {
            const result = window.confirm(
                'Are you sure you want to close the chat? After closing, the correspondence will be unavailable',
            );
            if (result) {
                dispatch(closeChatModal());
            } else {
                return;
            }
        }
    }

    if (chatIsActive) {
        return reactDom.createPortal(
            <div
                id="chatModal_Background"
                className="chatModal_Background"
                onClick={closeModalWindow}
            >
                <div className="chatModal_MainContainer">
                    <div className="chatModal_Header">
                        {nickname}({idCompanion})
                    </div>
                    <RejectChatButton isRejected={chatIsRejected} />
                    <MessageList messages={messageList} />
                    <InputCardRouter isRejected={chatIsRejected} />
                </div>
            </div>,
            document.getElementById('root'),
        );
    } else {
        return null;
    }
}

export default ChatModal;
