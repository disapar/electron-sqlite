const { app, BrowserWindow} = require("electron");
const database = require('./database');

const path = require('path');

require('electron-reload')(__dirname);
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
let window;

function createWindow() {
    window = new BrowserWindow({
      show: false,
      width: 1280,
      height: 720,
      // tamaño minimo de la ventana
      minWidth: 800,
      minHeight: 600,
      // tamaño maximo de la ventana
      maxWidth: 1920,
      maxHeight: 1200,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true,
      },
    });
    window.loadFile("src/view/index.html");
    // oculta el menu superior de la ventana.
    window.setMenuBarVisibility(true);
    window.setTitle('La Polla')
    // maximiza la ventana al iniciar la aplicacion
    window.maximize()
    window.once('ready-to-show', () => {
      window.show()
    })
  }

  

app.allowRendererProcessReuse = false;
app.whenReady().then(createWindow)

app.on('activate', ()=>{
  if(BrowserWindow.getAllWindows().length === 0){
    createWindow()
  }
})