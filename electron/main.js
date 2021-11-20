const {app, BrowserWindow} = require('electron');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1600,
        height: 900,
        minWidth: 1200,
        minHeight: 700,
        frame: false
    })

    win.loadFile(path.join(__dirname, '../', 'build', 'index.html'));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});