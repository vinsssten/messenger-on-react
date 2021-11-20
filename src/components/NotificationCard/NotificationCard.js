import { useSelector } from 'react-redux';
import './NotificationCard.css';

import NotificationList from './NotificationList';

function NotificationCard() {
    const notificationList = useSelector(state => state.app.notificationList);

    return (
        <div className="mainPage_NotificationCard">
            <div className="notificationCard_Header">Notifications 🔔</div>
            <NotificationList notificationArray={notificationList} />
        </div>
    );
}

export default NotificationCard;
