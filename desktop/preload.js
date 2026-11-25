// The only bridge between the game page and the desktop app: reading and picking the window size.
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('svDesktop', {
    getDisplay: () => ipcRenderer.invoke('display:get'),
    setDisplay: (size) => ipcRenderer.invoke('display:set', String(size)),
});
