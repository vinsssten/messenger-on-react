const date = new Date()

const defaultState = {
    nickname: null,
    idCompanion: null,
    messageList: [{
        isClientMessage: true,
        textMessage: "This is a system message 1",
        time: `${date.getHours()}:${date.getMinutes()}`
    },{
        isClientMessage: true,
        textMessage: "Lorem ipsum dolor sit amet 2",
        time: `${date.getHours()}:${date.getMinutes()}`
    },{
        isClientMessage: false,
        textMessage: "Hello world! 3",
        time: `${date.getHours()}:${date.getMinutes()}`
    },{
        isClientMessage: false,
        textMessage: "I am client! 4",
        time: `${date.getHours()}:${date.getMinutes()}`
    },{
        isClientMessage: true,
        textMessage: "Lorem ipsum dolor sit amet 5",
        time: `${date.getHours()}:${date.getMinutes()}`
    },{
        isClientMessage: true,
        textMessage: "Lorem ipsum dolor sit amet 6",
        time: `${date.getHours()}:${date.getMinutes()}`
    }]
}

const chatStateReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default chatStateReducer