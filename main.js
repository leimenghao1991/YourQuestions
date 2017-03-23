'use strict'

var electron = require('electron')
var app = electron.app
var BrowserWindow = electron.BrowserWindow

var mainWindow = null;
app.on('ready', () => {
	var electronScreen = electron.screen
	var size = electronScreen.getPrimaryDisplay().workAreaSize
	var height = size.height > 1920 ? 1920 : size.height
	var scaleRatio = height / 1920
	var width = 1080 * scaleRatio

	mainWindow = new BrowserWindow({width : width, height : height, frame : false})
	mainWindow.loadURL('file://' + __dirname + '/app/index.html')
})


/*处理程序退出问题*/
var ipcMain = electron.ipcMain

const {getFilePath} = require('./app/js/fileUtils')
console.log(getFilePath())
