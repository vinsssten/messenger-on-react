const defaultState = {
    socket: null,
    isSocketConnected: false,
    sessionId: null,
};

const socketReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_SOCKET':
            return {
                ...state,
                socket: action.socket,
                isSocketConnected: action.isSocketConnected,
            };
        case 'SET_SESSIONID':
            return { ...state, sessionId: action.sessionId };
        case 'SOCKET_DISCONNECT':
            return {
                ...state,
                socket: action.socket,
                isSocketConnected: false,
                sessionId: null,
            };
        default:
            return state;
    }
};

export default socketReducer;
