function creatingSocketID (socket, users) {
    const socketId = socket.id;
    const userId = randomID();

    users.set(socketId, userId)

    return userId
}

function randomID () {
    return Math.floor(Math.random() * 1000000000)
}

module.exports = creatingSocketID;