const express = require('express');
const app = express();

const port = 8080;

const start = () => {
    try {
        app.listen(port, () => {
            console.log(`server started at http://localhost:${port}`);
        })
    } catch (e) {
        console.log(e)
    }
}

start();
