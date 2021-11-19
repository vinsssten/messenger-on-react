import React, { useEffect, useState } from "react";
import '../MainPage.css'

import SpinLoader from "./SpinLoader";

function LoadingCard () {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        document.title = "MoR: Loading..."
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setShowMessage(true);
        }, 5000)
    }, [])

    return (
        <div className="loadingCard_Container">
            <h1 className="loadingCard_MainText">Messenger on React</h1>
            <h2 className="loadingCard_AdditionalText">Wait a second, we're trying to connect to the server...</h2>
            {showMessage ? 
                <h2 className="loadingCard_AdditionalText">The server is not responding, you can try later or continue to wait</h2>
                :
                null}
            <SpinLoader />
        </div>
    )
}

export default LoadingCard