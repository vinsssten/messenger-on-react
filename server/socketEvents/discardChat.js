function discardChat(recepientId, waitConfirmationUsers, parameters) {
    const { connectedUsersList, socket, io } = parameters;
    let isFound = false;
    let waiterSessionId = null;
    let waiterSocketId = null;

    for (let waiter of waitConfirmationUsers.entries()) {
        const curId = waiter[1].senderSessionId;

        if (recepientId === curId) {
            isFound = true;
            waiterSessionId = curId;
            waiterSocketId = waiter[0];

            waitConfirmationUsers.delete(waiterSocketId);
            break;
        }
    }

    if (isFound) {
        io.to(waiterSocketId).emit('waitConfirmationReject', 'User discard your offer');
    }
}

module.exports = discardChat;
