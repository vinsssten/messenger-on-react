import ButtonsContainer from './ButtonsContainer';
import './NotificationCard.css';

function SingleNotification({ notificationData, index }) {
    const { sender, nickname } = notificationData;

    return (
        <div className="notificationCard_Notification">
            <h1 className="notificationCard_Notification-HeaderText">
                User:
                <b> {nickname}</b>, ID: <b> {sender}</b>,
            </h1>
            <h2 className="notificationCard_Notification-Text">
                Wants to start a chat with you, start a chat?
            </h2>
            <ButtonsContainer sender={sender} index={index} />
        </div>
    );
}

export default SingleNotification;
