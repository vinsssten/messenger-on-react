const defaultState = {
    notificationList: [
        // {
        //     sender: '11111111',
        //     nickname: 'vinsssten'
        // },{
        //     sender: '11111111',
        //     nickname: 'vinsssten'
        // },{
        //     sender: '11111111',
        //     nickname: 'vinsssten'
        // },{
        //     sender: '11111111',
        //     nickname: 'vinsssten'
        // },{
        //     sender: '11111111',
        //     nickname: 'vinsssten'
        // },{
        //     sender: '11111111',
        //     nickname: 'vinsssten'
        // },{
        //     sender: '11111111',
        //     nickname: 'vinsssten'
        // },{
        //     sender: '11111111',
        //     nickname: 'vinsssten'
        // },{
        //     sender: '11111111',
        //     nickname: 'vinsssten'
        // },{
        //     sender: '11111111',
        //     nickname: 'vinsssten'
        // },{
        //     sender: '11111111',
        //     nickname: 'vinsssten'
        // },
    ],
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
        case 'DELETE_NOTIFICATION': 
            return {...state, notificationList: state.notificationList.slice(0, action.index).concat(state.notificationList.slice(action.index + 1))}
        case 'SET_WAITCONFIRMATION':
            return {...state, waitConfirmationChat: true, messageConfirmation: null}
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