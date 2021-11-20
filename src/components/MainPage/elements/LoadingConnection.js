import React, { useEffect, useState } from 'react';
import '../MainPage.css';
import OnlineText from './OnlineText';

import SpinLoader from './SpinLoader';

function LoadingCard() {
    const [isOffline, setIsOffline] = useState(!navigator.onLine);

    useEffect(() => {
        const onOnline = () => setIsOffline(false);
        const onOffline = () => setIsOffline(true);

        window.addEventListener('online', onOnline);
        window.addEventListener('offline', onOffline);

        return () => {
            window.removeEventListener('online', onOnline);
            window.removeEventListener('offline', onOffline);
        };
    }, []);

    useEffect(() => {
        document.title = 'MoR: Loading...';
    }, []);

    return (
        <div className="loadingCard_Container">
            <h1 className="loadingCard_MainText">Messenger on React</h1>
            {!isOffline ? (
                <OnlineText />
            ) : (
                <h2 className="loadingCard_AdditionalText">
                    Oops... There seems to be no internet access.
                    <br />I will connect as soon as there is a connection
                </h2>
            )}
            <SpinLoader />
        </div>
    );
}

export default LoadingCard;
