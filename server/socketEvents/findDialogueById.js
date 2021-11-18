function findDialogueById (searchedId, waitConfirmationUsers, parameters) {
    const {connectedUsersList, socket, io} = parameters;
    let isUserFound = false;

    for (let user of connectedUsersList.entries()) {
        //Текущий айди из цикла, предполагаемый айди пользователя
        const curId = user[1].userId                      
        if (Number(searchedId) === curId) {
            isUserFound = true
            //Параметры пользователя, который отправил запрос
            const {userId: requesterId, name} = connectedUsersList.get(socket.id);
            const requesterName = name ? name : "Anonymous";

            waitConfirmationUsers.set(socket.id, {waitFrom: curId, senderSessionId: requesterId});
            console.log('waitConf', waitConfirmationUsers)
            
            io.to(user[0]).emit('requestToStartChat', {requesterId, requesterName});
            socket.emit('waitConfirmation')
            break;
        }
    }

    if (!isUserFound) {
        console.log('user not found')
        socket.emit('waitConfirmationReject', 'User with this ID not found');
    }
}

module.exports = findDialogueById;