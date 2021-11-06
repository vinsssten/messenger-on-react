import {useState, useEffect} from "react";
import './MainPage.css'

import LoadingCard from "./elements/LoadingConnection";
import ConnectedCard from "./elements/ConnectedCard";

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
            <LoadingCard />
        )
    } else {
        return (
            <ConnectedCard
                sessionID={sessionID}
            />
        )
    }
}

export default MainPage