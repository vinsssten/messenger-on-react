import react, {useState, useEffect} from "react";
import './MainPage.css'

import useSocket from "../../lib/hooks/useSocket";

function MainPage (props) {
    const {socket, isLoadingSocket , sessionID, socketConnect} = useSocket() 

    useEffect(() => {
        document.title = "MoR: MainPage"
    }, [])

    useEffect(() => {
        socketConnect();
    }, [])

    if (isLoadingSocket) {
        return (
            <div className="mainPage_Container">
                <div className="mainPage_Header">Messenger on React</div>
                <div className="mainPage_Content">
                    <div className="mainPage_ConnectionInfo">
                        <h1>Loading...</h1>
                    </div>
                </div>
            </div>
        )
        
    } else {
        return (
            <div className="mainPage_Container">
                <div className="mainPage_Header">Messenger on React</div>
                <div className="mainPage_Content">
                    <div className="mainPage_ConnectionInfo">
                        Your ID : {sessionID}
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage