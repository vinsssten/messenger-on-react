const findIdBySessionId = require("./findIdBySessionId");

const date = new Date();

//FIXME: Функция рабоает некорректно
function redirectMessage (textMessage, activeDialogues, standartParameters ) {
    console.log('new message detected', textMessage)
    const {socket, io, connectedUsersList} = standartParameters;
    let firstSocketId = null;
    let secondSocketId = null;
    let isFoundDiags = false;

    activeDialogues.forEach((value, index) => {
        const curFirstSocketId = findIdBySessionId(value.firstUserId, connectedUsersList);
        const curSecondSocketId = findIdBySessionId(value.secondUserId, connectedUsersList);
        if (socket.id === curFirstSocketId || socket.id === curSecondSocketId) {
            firstSocketId = curFirstSocketId;
            secondSocketId = curSecondSocketId;
            isFoundDiags = true;

        }
    }) 

    if (isFoundDiags) {
        // const senderId = 
        const recepientId = socket.id !== firstSocketId ? firstSocketId : secondSocketId;

        io.to(socket.id).emit('getMessage', {
            isClientMessage: true,
            textMessage: textMessage,
            time: `${date.getHours()}:${date.getMinutes()}`
        })
        io.to(recepientId).emit('getMessage', {
            isClientMessage: false,
            textMessage: textMessage,
            time: `${date.getHours()}:${date.getMinutes()}`
        })
    } else (
        socket.emit('errorHandler', 'something went wrong')
    )
}

module.exports = redirectMessage;