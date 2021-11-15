const findIdBySessionId = require("./findIdBySessionId");

const date = new Date();

//FIXME: Функция рабоает некорректно
function redirectMessage (textMessage, activeDialogues, standartParameters ) {
    console.log('new message detected', textMessage)
    const {socket, io, connectedUsersList} = standartParameters;
    let users = {};
    let isFoundDiags = false;

    activeDialogues.forEach((value, index) => {
        const firstSocketId = findIdBySessionId(value.firstUserId, connectedUsersList);
        const secondSocketId = findIdBySessionId(value.secondUserId, connectedUsersList);
        console.log('value', value)
        if (socket.id === firstSocketId || socket.id === secondSocketId) {
            users = value;
            isFoundDiags = true;
        }
    }) 

    if (isFoundDiags) {
        const recepientId = socket.id === users.firstUserId ? users.firstUserId : users.secondUserId;
        const senderId = socket.id === users.firstUserId ? users.secondUserId : users.firstUserId;


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
        socket.emit('errorHandler', 'something went wrong')
    )
}

module.exports = redirectMessage;