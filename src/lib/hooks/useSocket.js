import { useState, useEffect } from 'react';
import io from 'socket.io-client';

function useSocket() {
    const [socket, setSocket] = useState(null);
    const [sessionID, setSessionID] = useState(null);
    const [isSocketConnected, setIsSocketConnected] = useState(false);
    const [isLoadingSocket, setIsloadingSocket] = useState(true);

    useEffect(() => {
        if (socket || socket?.connected) {
            setIsloadingSocket(true);
        }
    }, [socket]);

    function socketConnect() {
        try {
            if (socket === null || !socket.connected) {
                const socketio = io('ws://localhost:8080');
                setSocket(socketio);

                console.log('current socket', socket);

                socketio.on('connect', () => {
                    console.log('socket on connect', socket?.id);
                    setIsloadingSocket(false);
                    setIsSocketConnected(true);

                    socketio.on('userID', data => {
                        console.log('get userID', data);
                        setSessionID(data);
                    });
                });
            }
        } catch (e) {
            console.log('error while connect to socket', e);
        }
    }

    function socketDisconnect() {
        try {
            if (socket && socket.connected) {
                socket.disconnect();
                setSocket(null);
                console.log('socket disconnected');
            }
        } catch (err) {
            console.log('error when trying to disconnect', err);
        }
    }

    function socketMessage(message) {
        try {
            socket.emit('message', message);
        } catch (err) {
            console.log('error when trying to disconnect', err);
        }
    }

    return {
        socket,
        isLoadingSocket,
        sessionID,
        isSocketConnected,
        socketConnect,
        socketDisconnect,
        socketMessage,
    };
}

export default useSocket;
