import {useEffect} from "react";
import './MainPage.css'
import { useSelector, useDispatch } from "react-redux";

import socketConnect from "../../lib/actionCreators/socketConnect";

import LoadingCard from "./elements/LoadingConnection";
import ConnectedCard from "./elements/ConnectedCard";
function MainPage (props) {
    const {isSocketConnected, sessionId} = useSelector(state => state.socket)
    const dispatch = useDispatch();

    //TODO: Придумать как починить костыль явной передачи dispatch в функцию подключения к серверу
    useEffect(() => {
        if (!isSocketConnected) {
            dispatch(socketConnect('Anonymous', dispatch))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSocketConnected])

    useEffect(() => {
        document.title = "MoR: MainPage";
    }, [])

    if (!isSocketConnected) {
        return (
            <LoadingCard />
        )
    } else {
        return (
            <ConnectedCard
                sessionID={sessionId}
            />
        )
    }
}

export default MainPage