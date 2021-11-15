const date = new Date()

//TODO: Понять как праильно отобазить никнейм в первом сообщении
const defaultState = {
    nickname: null,
    idCompanion: null,
    chatIsActive: false,
    messageList: [{
        isClientMessage: false,
        textMessage: `This is a system message, chat with the user ${this?.nickname} started!` ,
        time: `${date.getHours()}:${date.getMinutes()}`
    }]
}

const chatStateReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHAT_START':
            return {...state, nickname: action.nickname, idCompanion: action.sessionId, chatIsActive: true}
        case 'CHAT_SHUTDOWN':
            return {...state, nickname: null, idCompanion: null, chatIsActive: false, messageList: defaultState.messageList}
        case 'RECEIVE_MESSAGE':
            return {...state, messageList: [...state.messageList, {
                isClientMessage: action.isClientMessage,
                textMessage: action.textMessage,
                time: action.time
            }]}
        default:
            return state
    }
}

export default chatStateReducer