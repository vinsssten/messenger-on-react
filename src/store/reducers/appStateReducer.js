const defaultState = {
    notificationList: [],
}

const appStateReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_NOTIFICATION':
            return {...state, notificationList: [...state.notificationList, {
                sender: action.userReqId,
                nickname: action.nickname}]
            }
        default:
            return state
    }
}

export default appStateReducer