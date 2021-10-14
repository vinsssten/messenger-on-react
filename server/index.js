const express = require('express');
const mongoose = require('mongoose');
const app = express();

const authRouter = require('./modules/authRouter')

const port = 8080;

app.use("/", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());

app.use('/auth', authRouter);

app.get('/', (req, res) => {
    res.send('Hello, User!');
})

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://vinsssten:794613qwe@cluster0.hxlvs.mongodb.net/messenger-on-react?retryWrites=true&w=majority')

        app.listen(port, () => {
            console.log(`server started at http://localhost:${port}`);
        })
    } catch (e) {
        console.log(e)
    }
}

start();
