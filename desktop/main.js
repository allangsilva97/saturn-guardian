const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 760,
        minWidth: 640,
        minHeight: 400,
        backgroundColor: '#020617',
        title: 'Saturn Vanguard',
        autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: true,
        },
    });

    win.loadFile(path.join(__dirname, 'app', 'index.html'));

    // F11 toggles fullscreen
    win.webContents.on('before-input-event', (event, input) => {
        if (input.type === 'keyDown' && input.key === 'F11') {
            win.setFullScreen(!win.isFullScreen());
            event.preventDefault();
        }
    });

    // Never navigate the game window away; open any external link in the real browser
    win.webContents.on('will-navigate', (event, url) => {
        if (!url.startsWith('file://')) {
            event.preventDefault();
            shell.openExternal(url);
        }
    });
    win.webContents.setWindowOpenHandler(({ url }) => {
        if (/^https?:\/\//.test(url)) shell.openExternal(url);
        return { action: 'deny' };
    });
}

Menu.setApplicationMenu(null);

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
