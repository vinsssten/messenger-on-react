import React, { useEffect } from "react";
import '../MainPage.css'

import SpinLoader from "./SpinLoader";

function LoadingCard () {

    useEffect(() => {
        document.title = "MoR: Loading..."
    }, [])

    return (
        <div className="loadingCard_Container">
            <h1 className="loadingCard_MainText">Messenger on React</h1>
            <h2 className="loadingCard_AdditionalText">Wait a second, we're trying to connect to the server...</h2>
            <SpinLoader />
        </div>
    )
}

export default LoadingCard