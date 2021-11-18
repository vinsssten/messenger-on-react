const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const acceptChat = require("./socketEvents/acceptChat");
const creatingSocketID = require("./socketEvents/creatingSessionID");
const findDialogueById = require("./socketEvents/findDialogueById");
const discardChat = require("./socketEvents/discardChat");
const setUserNickname = require('./socketEvents/setUserNickname');
const redirectMessage = require("./modules/redirectMessage");
const rejectChat = require("./modules/rejectChat");
const closeChat = require("./socketEvents/closeChat");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: {
    origin: "*",
    methods: ["GET", "POST"]
} });

let connectedUsersList = new Map();
let waitConfirmationUsers = new Map();
let activeDialogues = [];

//FIXME: Пофиксить проблему с отправкой уведомления пользователь не найден

try {
    io.on("connection", (socket) => {
        console.log('user connected', socket.id);
        socket.emit('userID', creatingSocketID(socket, connectedUsersList));
        console.log('connected users', connectedUsersList);
    
        const standartParameters = {connectedUsersList, socket, io};
    
        socket.on('setUsername', data => setUserNickname(data, connectedUsersList, socket.id));
    
        socket.on('findDialogueById', searchedId => findDialogueById(searchedId, waitConfirmationUsers, standartParameters));
    
        socket.on('acceptChat', data => acceptChat(data, activeDialogues, waitConfirmationUsers, standartParameters));

        socket.on('discardChat', data => discardChat(data, waitConfirmationUsers, standartParameters));

        socket.on('closeChat', data => closeChat(activeDialogues, standartParameters));
    
        socket.on('sendMessage', data => redirectMessage(data, activeDialogues, standartParameters))
    
        socket.on('getUsers', () => {
            const convertedMap = [...connectedUsersList].map(([name, value]) => ({ name, value }))
            console.log('req to get users');
            socket.emit('getUsers', convertedMap)
        })
    
        socket.on('disconnect', data => {
            rejectChat(socket.id, 'Your companion was disconnected', activeDialogues, standartParameters);
            connectedUsersList.delete(socket.id);
            console.log('user disconnect:', socket.id);
        })
    });
} catch (err) {
    console.log('internal error', err);
    io.emit('INTERNAL_ERROR', 'Internal server error, try later');
}


io.on('uncaughtException', (exception) => {
    // handle or ignore error
    console.log('uncaughtException', exception);
});

httpServer.listen(8080);