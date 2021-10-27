function creatingSocketID (socket) {
    const id = randomID();
    socket.sessionID = id;

    console.log('a user with an ID is assigned an ID session:', id)

    return id
}

function randomID () {
    return Math.floor(Math.random() * 1000000000)
}

module.exports = creatingSocketID;