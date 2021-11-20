import React, { useState, useEffect } from 'react';
import '../MainPage.css';

function OnlineText() {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowMessage(true);
        }, 5000);
    }, []);

    return (
        <>
            <h2 className="loadingCard_AdditionalText">
                Wait a second, we're trying to connect to the server...
            </h2>
            {showMessage ? (
                <h2 className="loadingCard_AdditionalText">
                    The server is not responding, you can try later or continue to wait
                </h2>
            ) : null}
        </>
    );
}

export default OnlineText;
