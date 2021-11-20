const isConnectedUser = (socketId, connectedUsersList) => {
    for (let user of connectedUsersList.entries()) {
        if (user[0] === socketId) {
            return true;
        }
    }

    return false;
};

module.exports = isConnectedUser;
