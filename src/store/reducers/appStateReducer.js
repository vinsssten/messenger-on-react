const defaultState = {
    notificationList: [],
    findModalActive: false,
    waitConfirmationChat: false,
    messageConfirmation: null,
}

const appStateReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_NOTIFICATION':
            return {...state, notificationList: [...state.notificationList, {
                sender: action.userReqId,
                nickname: action.nickname}]
            }
        case 'SET_WAITCONFIRMATION':
            return {...state, waitConfirmationChat: true}
        case 'DELETE_WAITCONFIRMATION':
            return {...state, waitConfirmationChat: false, messageConfirmation: action.messageConfirmation}
        case 'OPEN_FINDMODAL':
            return {...state, findModalActive: true}
        case 'CLOSE_FINDMODAL':
            return {...state, findModalActive: false, messageConfirmation: null}
        default:
            return state
    }
}

export default appStateReducer