import './NotificationCard.css'
import SingleNotification from './SingleNotificate'

function NotificationList ({notificationArray}) {

    // FIXME:Пофиксить отображения уведомлений в неправильном порядке

    return (
        <div className="notificationCard_Content">
            {notificationArray.map((item, index) => {
                return <SingleNotification 
                    notificationData={notificationArray[index]}
                    key={index}
                />
            }).reverse()}
        </div>
    )
}

export default NotificationList