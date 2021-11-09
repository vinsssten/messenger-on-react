import './NotificationCard.css'
import SingleNotification from './SingleNotificate'

function NotificationList ({notificationArray}) {


    return (
        <div className="notificationCard_Content">
            {notificationArray.map((item, index) => {
                return <SingleNotification 
                    notificationData={notificationArray[index]}
                    key={index}
                />
            })}
        </div>
    )
}

export default NotificationList