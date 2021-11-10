const findNameBySessionId = (sessionId, connectedUsersList) => {
    let isFounded = false;
    let foundedName = null;

    for (let item of connectedUsersList.entries()) {
        const beingCheckedId = item[1].userId; 

        if (Number(beingCheckedId) === sessionId) {
            isFounded = true;
            foundedName = item[1].name;
            break;
        }
    }

    if (isFounded) {
        return foundedName
    } else {
        return null
    }
}

module.exports = findNameBySessionId;