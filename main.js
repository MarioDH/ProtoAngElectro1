const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const url = require('url')
var fs = require('fs')

let win = null;

// When the application is ready
app.on('ready', createWindow)

function createWindow () {
  
  win = new BrowserWindow({width: 800, height: 600})
  // load the dist folder from Angular
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  
  wintwo = new BrowserWindow({ width: 400, height: 400 });
  wintwo.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/index.html/dash'),
    protocol: 'file:',
    slashes: true
  }))
  

  // Open the DevTools optionally:
  // win.webContents.openDevTools()

  ipcMain.on('Opengoogle', () => {
    wintwo.show();
})

  win.on('closed', () => {
    win = null
  })

}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})