import './NotificationCard.css';
import SingleNotification from './SingleNotificate';

function NotificationList({ notificationArray }) {
    return (
        <div className="notificationCard_Content">
            {notificationArray
                .map((item, index) => {
                    return (
                        <SingleNotification
                            notificationData={notificationArray[index]}
                            key={index}
                            index={index}
                        />
                    );
                })
                .reverse()}
        </div>
    );
}

export default NotificationList;
