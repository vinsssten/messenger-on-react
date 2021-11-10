const defaultState = {
    nickname: null,
    idCompanion: null,
    messageList: [{
        isClientMessage: true,
        textMessage: "This is a system message"
    },{
        isClientMessage: true,
        textMessage: "Lorem ipsum dolor sit amet"
    },{
        isClientMessage: false,
        textMessage: "Hello world!"
    },{
        isClientMessage: false,
        textMessage: "I am client!"
    },{
        isClientMessage: true,
        textMessage: "Lorem ipsum dolor sit amet"
    },{
        isClientMessage: true,
        textMessage: "Lorem ipsum dolor sit amet"
    }]
}

const chatStateReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default chatStateReducer