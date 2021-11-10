import { io } from "socket.io-client"

const socketConnect = (name = 'Anonymous', dispatch) => {
    try {
        const socket = io('ws://localhost:8080').connect();

        socket.on('connect', () => {
            socket.emit('setNickname', name);

            socket.on('userID', data => {
                dispatch({type: 'SET_SESSIONID', sessionId: data});
            })

            socket.on('disconnect', () => {
                dispatch({type: 'SOCKET_DISCONNECT', socket: socket})
            })

            socket.on('chatStart', (data) => {
                console.log('chatStart', data);
                dispatch({type: 'CHAT_START', nickname: data.username, sessionId: data.sessionId})
            })

            socket.on('requestToStartChat', (data) => {
                console.log('data', data)
                dispatch({type: "ADD_NOTIFICATION", userReqId: data.requesterId, nickname: data.requesterName})
            })
        })

        return {type: "SET_SOCKET", socket: socket, isSocketConnected: true}
    } catch (err) {
        console.log('error while connecting to socket', err);
        return {type: "SOCKET_ERROR", message: err}
    }
}

export default socketConnect