const defaultState = {
    nickname: null,
    idCompanion: null,
    messageList: [{
        isClientMessage: true,
        textMessage: "This is a system message 1"
    },{
        isClientMessage: true,
        textMessage: "Lorem ipsum dolor sit amet 2"
    },{
        isClientMessage: false,
        textMessage: "Hello world! 3"
    },{
        isClientMessage: false,
        textMessage: "I am client! 4"
    },{
        isClientMessage: true,
        textMessage: "Lorem ipsum dolor sit amet 5"
    },{
        isClientMessage: true,
        textMessage: "Lorem ipsum dolor sit amet 6"
    }]
}

const chatStateReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default chatStateReducer