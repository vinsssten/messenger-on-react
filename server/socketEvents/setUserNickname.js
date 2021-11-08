const setUserNickname = (name, users, socketId) => {
    const userObj = users.get(socketId);
    userObj.name = name
}

module.exports = setUserNickname