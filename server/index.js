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

io.on("connection", (socket) => {
    console.log('connection', socket.id);

    socket.emit('userID', creatingSocketID(socket));

    socket.on('disconnect', data => {
        console.log('disconnected with:', data)
    })
});

io.on('uncaughtException', (exception) => {
    // handle or ignore error
    console.log(exception);
});

httpServer.listen(8080);