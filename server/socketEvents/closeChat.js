const findIdBySessionId = require('../modules/findIdBySessionId');

const closeChat = (activeDialogues, standartParameters) => {
    const { io, socket, connectedUsersList } = standartParameters;
    const senderSocketId = socket.id;
    const senderSessionId = connectedUsersList.get(senderSocketId).userId;

    let firstUserForReject = null;
    let secondUserForReject = null;
    activeDialogues.forEach((value, index) => {
        const first = value.firstUserId;
        const second = value.secondUserId;
        if (
            value.firstUserId === senderSessionId ||
            value.secondUserId === senderSessionId
        ) {
            firstUserForReject = first;
            secondUserForReject = second;

            activeDialogues.splice(index);

            io.to(findIdBySessionId(firstUserForReject, connectedUsersList)).emit(
                'rejectChat',
                'User close chat',
            );
            io.to(findIdBySessionId(secondUserForReject, connectedUsersList)).emit(
                'rejectChat',
                'User close chat',
            );

            return true;
        }
    });

    socket.emit('errorMiddleware', 'Something went wrong while closing chat');
    return false;
};

module.exports = closeChat;
