const findIdBySessionId = require("./findIdBySessionId")

const rejectChat = (socketId, message, activeDialogues, standartParameters) => {
    const {io, connectedUsersList} = standartParameters;
    const senderSessionId = connectedUsersList.get(socketId).userId;
    let receiverSessionId = null;

    activeDialogues.forEach((value, index, array) => { 
        if (value.firstUserId === senderSessionId) {
            receiverSessionId = value.secondSessionId;
        } else if (value.secondSessionId === senderSessionId) {
            receiverSessionId = value.firstSessionId;
        }
    })

    const receiverSocketId = findIdBySessionId(receiverSessionId, connectedUsersList);
    io.to(receiverSocketId).emit('rejectChat', message);
}

module.exports = rejectChat