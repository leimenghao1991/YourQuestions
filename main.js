'use strict'

var electron = require('electron')
var app = electron.app
var BrowserWindow = electron.BrowserWindow

var mainWindow = null;
app.on('ready', () => {
	var electronScreen = electron.screen
	var size = electronScreen.getPrimaryDisplay().workAreaSize

	mainWindow = new BrowserWindow({width : size.width, height : size.height, frame : false})
	mainWindow.loadURL('file://' + __dirname + '/app/index.html')
})


/*处理程序退出问题*/
var ipcMain = electron.ipcMain
