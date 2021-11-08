const defaultState = {
    socket: null,
    isConnected: false,
    sessionId: null,
}

const socketReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_SOCKET': 
            return {...state, socket: action.socket}
        case 'SET_ISCONNECTED':
            return {...state, isConnected: action.isConnected}
        case 'SET_SESSIONID': 
            return {...state, sessionId: action.sessionId}
        default: 
            return state
    }
}

export default socketReducer