const defaultState = {
    socket: {isTestData: true},
    isConnected: true,
    sessionId: 111111111,
    testValue: 333,
}

const testDataReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default testDataReducer