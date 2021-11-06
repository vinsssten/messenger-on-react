const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const creatingSocketID = require("./socketEvents/creatingSessionID");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: {
    origin: "*",
    methods: ["GET", "POST"]
} });

let connectedUsers = new Map();

io.on("connection", (socket) => {
    console.log('user connected', socket.id);

    socket.emit('userID', creatingSocketID(socket, connectedUsers));

    console.log('connected users', connectedUsers);

    socket.on('disconnect', data => {
        connectedUsers.delete(socket.id)    
        console.log('user disconnect:', socket.id);
        console.log('connected users:', connectedUsers)
    })
});

io.on('uncaughtException', (exception) => {
    // handle or ignore error
    console.log('uncaughtException', exception);
});

httpServer.listen(8080);