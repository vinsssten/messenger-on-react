import { useState } from 'react'
import './MainPage.css'

import ConnectedCard from '../ConnectedCard/ConnectedCard'
import FindCompanionModal from '../Modals/FindCompanionModal/FindCompanionModal'
import NicknameInputCard from '../NicknameInputCard/NicknameInputCard'
import NotificationCard from '../NotificationCard/NotificationCard'

function MainPage ({sessionId}) {
    const [isActiveFindModal, setIsActiveFindModal] = useState(false);
    const [permissionToCloseModal, setPermissionToCloseModal] = useState(true);

    return (
        <div className="mainPage_Container">
            <div className="mainPage_Header">Messenger on React</div>
            <div className="mainPage_LS">
                <NicknameInputCard />
            </div>
            <div className="mainPage_Content">
                <ConnectedCard
                    sessionId={sessionId}
                    isActiveFindModal={isActiveFindModal}
                    setIsActiveFindModal={setIsActiveFindModal}
                />
            </div>
            <div className="mainPage_RS">
                <NotificationCard />
            </div>
            <FindCompanionModal 
                isActive={isActiveFindModal}
                setIsActive={setIsActiveFindModal}
                permissionToCloseModal={permissionToCloseModal}
                setPermissionToCloseModal={setPermissionToCloseModal}
            />
        </div>
    )
}

export default MainPage