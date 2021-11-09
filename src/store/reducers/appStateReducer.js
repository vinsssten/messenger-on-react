const defaultState = {
    notificationList: [{
        sender: 123123123,
        nickname: "admin",
        text: "Want to start chat with you!"
    }],
    chatIsActive: false,
}

const appStateReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default appStateReducer