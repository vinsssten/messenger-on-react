const findNameBySessionId = require('../modules/findNameBySessionId');
const findIdBySessionId = require('../modules/findIdBySessionId');
const isConnectedUser = require('../modules/isConnectedUser');

function acceptChat(recepientId, activeDialogues, waitConfirmationUsers, parameters) {
    const { connectedUsersList, socket, io } = parameters;
    const senderId = connectedUsersList.get(socket.id).userId;
    const senderUsername = findNameBySessionId(senderId, connectedUsersList);
    const recepientUsername = findNameBySessionId(recepientId, connectedUsersList);
    const recepientSocketId = findIdBySessionId(recepientId, connectedUsersList);

    waitConfirmationUsers.delete(recepientSocketId);

    if (isConnectedUser(recepientSocketId, connectedUsersList)) {
        socket.emit('chatStart', { username: recepientUsername, sessionId: recepientId });
        io.to(recepientSocketId).emit('chatStart', {
            username: senderUsername,
            sessionId: senderId,
        });
        activeDialogues.push({
            firstUserId: senderId,
            secondUserId: recepientId,
        });
    } else {
        //TODO: Добавить соответсвующего слушателя на клиенте
        socket.emit(
            'errorMiddleware',
            `Error in confirm, maybe user ${recepientId} was disconnected`,
        );
    }
}

module.exports = acceptChat;
