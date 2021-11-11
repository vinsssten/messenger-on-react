import {useEffect} from "react";
import './MainPage.css'
import { useSelector, useDispatch } from "react-redux";

import socketConnect from "../../lib/actionCreators/socketConnect";

import LoadingCard from "./elements/LoadingConnection";
import MainPage from "./MainPage";

function SocketDispatcher (props) {
    const {isSocketConnected, sessionId} = useSelector(state => state.socket)
    const dispatch = useDispatch();

    //TODO: Придумать как починить костыль явной передачи dispatch в функцию подключения к серверу
    useEffect(() => {
        if (!isSocketConnected) {
            socketConnect('Anonymous', dispatch)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSocketConnected])

    if (!isSocketConnected) {
        console.log('non connected')
        return (
            <LoadingCard />
        )
    } else {
        console.log('connected')
        return (
            <MainPage
                sessionId={sessionId}
            />
        )
    }
}

export default SocketDispatcher