const date = new Date();

//FIXME: Функция рабоает некорректно
function redirectMessage (textMessage, activeDialogues, standartParameters ) {
    console.log('new message detected', textMessage)
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


        console.log('message from:', senderId, "to:", recepientId)
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