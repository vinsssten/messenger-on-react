import { useSelector } from 'react-redux'
import './NotificationCard.css'

function ButtonsContainer ({sender}) {
    const {socket} = useSelector(state => state.socket);

    function acceptChat () {
        try {
            socket.emit('acceptChat', sender);
        } catch (err) {
            console.log('err in acceptChat', err);
        }
    }

    function discardChat () {
        try {
            socket.emit('discardChat', sender);
        } catch (err) {
            console.log('err in discardChat', err);
        }
    }
    
    return (
        <div className="notificationCard_Notification-ButtonsContainer">
            <div 
                className="notificationCard_Notification-Button accept"
                onClick={acceptChat}
                    >✔
            </div>
            <div 
                className="notificationCard_Notification-Button discard"
                onClick={discardChat}
                    >❌
            </div>
        </div>
    )
}

export default ButtonsContainer