const findIdBySessionId  = (sessionId, connectedUsersList) => {
    let isIdFound = false;
    let foundedId = null;

    for (let item of connectedUsersList.entries()) {
        const beingCheckedId = item[1].userId; 

        if (Number(beingCheckedId) === sessionId) {
            isIdFound = true;
            foundedId = beingCheckedId
            break;
        }
    }

    if (isIdFound) {
        return foundedId
    } else {
        return null
    }
}

module.exports = findIdBySessionId