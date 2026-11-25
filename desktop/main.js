const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');
const fs = require('fs');

// The game was called Saturn Vanguard before 2.8.0. Its save lives in the app's userData
// folder, which is named after productName, so copy the old folder over before anything opens it (older exes keep theirs).
(() => {
    const appData = app.getPath('appData');
    const oldDir = path.join(appData, 'Saturn Vanguard'), newDir = path.join(appData, 'Saturn Guardian');
    if (!fs.existsSync(oldDir) || fs.existsSync(newDir)) return;
    try { fs.cpSync(oldDir, newDir, { recursive: true }); }
    catch { fs.rmSync(newDir, { recursive: true, force: true }); app.setPath('userData', oldDir); } // half a copy is worse than the old folder
})();

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 760,
        minWidth: 640,
        minHeight: 400,
        backgroundColor: '#020617',
        title: 'Saturn Guardian',
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
