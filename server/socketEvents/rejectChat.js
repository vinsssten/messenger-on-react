const findIdBySessionId = require('./findIdBySessionId');

const rejectChat = (senderSocketId, message, activeDialogues, standartParameters) => {
    const { io, connectedUsersList } = standartParameters;
    const senderSessionId = connectedUsersList.get(senderSocketId).userId;
    let receiverSessionId = null;

    activeDialogues.forEach((value, index) => {
        console.log('value', value.firstUserId, value.secondUserId);
        if (value.firstUserId === senderSessionId) {
            receiverSessionId = value.secondUserId;
        } else if (value.secondUserId === senderSessionId) {
            receiverSessionId = value.firstUserId;
        }
    });

    if (!receiverSessionId) {
        console.log('user', senderSocketId, 'haven`t active chats');
    } else {
        const receiverSocketId = findIdBySessionId(receiverSessionId, connectedUsersList);
        io.to(receiverSocketId).emit('rejectChat', message);
    }
};

module.exports = rejectChat;
