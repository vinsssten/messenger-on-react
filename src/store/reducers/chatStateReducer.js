const defaultState = {
    nickname: null,
    idCompanion: null,
    messageList: [{
        isClientMessage: true,
        textMessage: "This is a system message"
    }]
}

const chatStateReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default chatStateReducer