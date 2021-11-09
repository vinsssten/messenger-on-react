import { useState } from 'react'
import './MainPage.css'

import ConnectedCard from '../ConnectedCard/ConnectedCard'
import FindCompanionModal from '../Modals/FindCompanionModal/FindCompanionModal'
import NicknameInputCard from '../NicknameInputCard/NicknameInputCard'

function MainPage ({sessionId}) {
    const [isActiveFindModal, setIsActiveFindModal] = useState(false);

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

            </div>
            <FindCompanionModal 
                isActive={isActiveFindModal}
                setIsActive={setIsActiveFindModal}
            />
        </div>
    )
}

export default MainPage