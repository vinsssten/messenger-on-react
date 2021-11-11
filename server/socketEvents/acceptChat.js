const findNameBySessionId = require("../modules/findNameBySessionId");
const findIdBySessionId = require('../modules/findIdBySessionId');

function acceptChat (recepientId, activeDialogues, waitConfirmationUsers, parameters) {
    const {connectedUsersList, socket, io} = parameters;
    const senderId = connectedUsersList.get(socket.id).userId;
    const senderUsername = findNameBySessionId(senderId, connectedUsersList);
    const recepientUsername = findNameBySessionId(recepientId, connectedUsersList);
    const recepientSocketId = findIdBySessionId(recepientId, connectedUsersList);

    waitConfirmationUsers.delete(recepientSocketId);

    socket.emit('chatStart', {username: recepientUsername, sessionId: recepientId});
    io.to(recepientSocketId).emit('chatStart', {username: senderUsername, sessionId: senderId});
    activeDialogues.push({
        firstUserId: senderId,
        secondUserId: recepientId,
    });
}

module.exports = acceptChat;