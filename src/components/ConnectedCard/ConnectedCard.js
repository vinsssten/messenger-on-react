import React from 'react';
import './ConnectedCard.css';

import ActionButtonMainCard from './ActionButtonMainCard';

function ConnectedCard({ sessionId, toggleFindModal }) {
    return (
        <div className="mainPage_ConnectionInfo">
            <div className="mainPage_SessionID">
                Your ID : {!sessionId ? 'Loading...' : sessionId}
            </div>
            <div className="mainPage_HintText">
                Tell this ID to your friend so that he can send a request to create a chat
            </div>
            <ActionButtonMainCard action={() => toggleFindModal()}>
                Start a chat!
            </ActionButtonMainCard>
            {/* <ActionButtonMainCard
                action={() => alert('Is under construction')}>
                    Find a random companion
            </ActionButtonMainCard> */}
        </div>
    );
}

export default ConnectedCard;
