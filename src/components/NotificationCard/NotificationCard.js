import './NotificationCard.css'

import NotificationList from './NotificationList'

const notifications = [{
    sender: 123123123,
    nickname: "admin",
    text: "Want to start chat with you!"
},{
    sender: 123123123,
    nickname: "admin",
    text: "Want to start chat with you!"
},{
    sender: 123123123,
    nickname: "admin",
    text: "Want to start chat with you!"
},{
    sender: 123123123,
    nickname: "admin",
    text: "Want to start chat with you!"
},{
    sender: 123123123,
    nickname: "admin",
    text: "Want to start chat with you!"
},{
    sender: 123123123,
    nickname: "admin",
    text: "Want to start chat with you!"
},{
    sender: 123123123,
    nickname: "admin",
    text: "Want to start chat with you!"
},{
    sender: 123123123,
    nickname: "admin",
    text: "Want to start chat with you!"
},{
    sender: 123123123,
    nickname: "admin",
    text: "Want to start chat with you!"
},{
    sender: 123123123,
    nickname: "admin",
    text: "Want to start chat with you!"
},]

function NotificationCard () {
    

    return (
        <div className="mainPage_NotificationCardContainer">
            <div className="mainPage_NotificationCard">
                <div className="notificationCard_Header">Notification 🔔</div>
                <NotificationList
                    notificationArray={notifications}/>
            </div>
        </div>
    )
}

export default NotificationCard