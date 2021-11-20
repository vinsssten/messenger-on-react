import { useDispatch, useSelector } from 'react-redux';
import './NotificationCard.css';

function ButtonsContainer({ sender, index }) {
    const { socket } = useSelector(state => state.socket);
    const dispatch = useDispatch();

    function acceptChat() {
        try {
            socket.emit('acceptChat', sender);
            deleteNotification(index);
        } catch (err) {
            console.log('err in acceptChat', err);
        }
    }

    function discardChat() {
        try {
            socket.emit('discardChat', sender);
            console.log('key', index);
            deleteNotification(index);
        } catch (err) {
            console.log('err in discardChat', err);
        }
    }

    function deleteNotification(key) {
        dispatch({ type: 'DELETE_NOTIFICATION', index: key });
    }

    return (
        <div className="notificationCard_Notification-ButtonsContainer">
            <div
                className="notificationCard_Notification-Button accept"
                onClick={acceptChat}
            >
                ✔
            </div>
            <div
                className="notificationCard_Notification-Button discard"
                onClick={discardChat}
            >
                ❌
            </div>
        </div>
    );
}

export default ButtonsContainer;
