const date = new Date();

function redirectMessage (textMessage, activeDialogues, standartParameters ) {
    const {socket, io} = standartParameters;
    let users = {};
    let isFoundDiags = false;

    activeDialogues.forEach((value, index) => {
        if (socket.id === value.firstUserId || socket.id === value.secondUserId) {
            users = value;
            isFoundDiags = true;
        }
    }) 

    if (isFoundDiags) {
        const senderId = socket.id === users.firstUserId ? users.firstUserId : users.secondUserId;
        const recepientId = socket.id === users.firstUserId ? users.secondUserId : users.firstUserId;

        io.to(senderId).emit('newMessage', {
            isClientMessage: true,
            textMessage: textMessage,
            time: `${date.getHours()}:${date.getMinutes()}`
        })
        io.to(recepientId).emit('newMessage', {
            isClientMessage: false,
            textMessage: textMessage,
            time: `${date.getHours()}:${date.getMinutes()}`
        })
    } else (
        socket.emit('error', 'something went wrong')
    )
}

module.exports = redirectMessage;