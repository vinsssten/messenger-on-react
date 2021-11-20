import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MainPage.css';

import ConnectedCard from '../ConnectedCard/ConnectedCard';
import FindCompanionModal from '../Modals/FindCompanionModal/FindCompanionModal';
import NicknameInputCard from '../NicknameInputCard/NicknameInputCard';
import NotificationCard from '../NotificationCard/NotificationCard';
import ChatModal from '../ChatModal/ChatModal';

function MainPage({ sessionId }) {
    const { findModalActive } = useSelector(state => state.app);
    const dispatch = useDispatch();

    //TODO: Добавить удаление уведомлений и закрытие моадльного окна поиска при старте чата

    function toggleFindModal() {
        if (findModalActive) {
            dispatch({ type: 'CLOSE_FINDMODAL' });
        } else {
            dispatch({ type: 'OPEN_FINDMODAL' });
        }
    }

    useEffect(() => {
        document.title = 'MoR: MainPage';
    }, []);

    return (
        <div className="mainPage_Container">
            <div className="mainPage_Header">Messenger on React</div>
            <div className="mainPage_LS">
                <NicknameInputCard />
            </div>
            <div className="mainPage_Content">
                <ConnectedCard sessionId={sessionId} toggleFindModal={toggleFindModal} />
            </div>
            <div className="mainPage_RS">
                <NotificationCard />
            </div>
            <FindCompanionModal
                sessionId={sessionId}
                findModalActive={findModalActive}
                toggleFindModal={toggleFindModal}
            />
            <ChatModal />
        </div>
    );
}

export default MainPage;
