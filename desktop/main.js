const { app, BrowserWindow, Menu, shell, ipcMain, screen } = require('electron');
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

// Window size, picked in the game (WINDOW button): the game area in screen pixels (Windows display scaling
// taken into account), or full screen. The HUD bar sits above the game area, so the window is that much taller.
// Saved in display.json in the save folder.
const SIZES = ['960x540', '1280x720', '1600x900', '1920x1080', '2560x1440', '3840x2160'];
const HUD_H = 30;
const displayFile = () => path.join(app.getPath('userData'), 'display.json');
const parseSize = (size) => size.split('x').map(Number);
const scale = () => screen.getPrimaryDisplay().scaleFactor || 1;
const toWindow = (size) => { const [w, h] = parseSize(size), k = scale(); return [Math.round(w / k), Math.round(h / k) + HUD_H]; };
function fittingSizes() { // the sizes whose window fits this screen
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    const fit = SIZES.filter((s) => { const [w, h] = toWindow(s); return w <= width && h <= height; });
    return fit.length ? fit : [SIZES[0]];
}
let displaySize = '1280x720';
function loadDisplaySize() {
    let size = null;
    try { size = JSON.parse(fs.readFileSync(displayFile(), 'utf8')).size; } catch {}
    const fit = fittingSizes();
    if (size !== 'fullscreen' && !fit.includes(size)) { // first launch (or a smaller screen): the largest size that leaves some room
        const wide = screen.getPrimaryDisplay().size.width * scale() * 0.85;
        size = fit.filter((s) => parseSize(s)[0] <= wide).pop() || fit[0];
    }
    displaySize = size;
}
const displayInfo = () => ({ size: displaySize, options: [...fittingSizes(), 'fullscreen'] });
function applyDisplay(win, size) {
    if (size === 'fullscreen') { win.setFullScreen(true); return; }
    const [w, h] = toWindow(size);
    const resize = () => { if (win.isMaximized()) win.unmaximize(); win.setContentSize(w, h); win.center(); };
    if (win.isFullScreen()) { win.once('leave-full-screen', () => setTimeout(resize, 50)); win.setFullScreen(false); }
    else resize();
}
ipcMain.handle('display:get', () => displayInfo());
ipcMain.handle('display:set', (event, size) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    if (!win || !displayInfo().options.includes(size)) return displayInfo();
    displaySize = size;
    try { fs.writeFileSync(displayFile(), JSON.stringify({ size })); } catch {}
    applyDisplay(win, size);
    return displayInfo();
});

function createWindow() {
    loadDisplaySize();
    const [w, h] = toWindow(displaySize === 'fullscreen' ? fittingSizes()[0] : displaySize);
    const win = new BrowserWindow({
        width: w,
        height: h,
        useContentSize: true,
        fullscreen: displaySize === 'fullscreen',
        minWidth: 640,
        minHeight: 400,
        backgroundColor: '#020617',
        title: 'Saturn Guardian',
        autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: true,
            preload: path.join(__dirname, 'preload.js'),
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
