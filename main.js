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

    mainWindow = new BrowserWindow({ width: width, height: height, frame: false })
    mainWindow.loadURL('file://' + __dirname + '/app/index.html')

    // var fileUtils = require('./app/js/fileUtils')
    // console.log("文件:" + fileUtils.filePath)
    // var question1 = '水是怎样形成的2'

    // var answers1 = fileUtils.readAnswers(question1)
    // console.log("问题：" + question1 + "  答案：" + answers1)
    // fileUtils.saveAnswer(question1, '水是下雨形成的2')
    // answers1 = fileUtils.readAnswers(question1)
    // console.log("问题：" + question1 + "  答案：" + answers1)

    // fileUtils.saveAnswer('为什么会下雨', null)
    // fileUtils.saveAnswer('为什么会有东西啊天', null)
    // fileUtils.saveAnswer('为什么会有东西啊天', '因为自传')

    // fileUtils.svaeThink('think1')
    // fileUtils.svaeThink('think2')
    // fileUtils.svaeThink('think3')
    // fileUtils.svaeThink('think4')
    // fileUtils.svaeThink('think5')
    // fileUtils.readThinks()
    //你先写着，用进程通信方式写，存数据取数据需要从main.js来取,见65行左右的通信及注释



    // fileUtils.saveAnswer('为什么会打雷', '因为云层的摩擦')

    var allQuestions = fileUtils.readAllQuestions()
    console.log("所有问题：" + allQuestions)
})


/*处理程序退出问题*/
var ipcMain = electron.ipcMain
var fileUtils = require('./app/js/fileUtils')


/*在你需要的js里面这么写：
const {ipcRenderer} = require('electron')
ipcRenderer.send('get-question', '为什么会打雷下雨')
ipcRenderer.on('answers', (event, arg) => {
	//arg是answer数组
	for (answer in arg){
		xxxx
	}
})

*/
ipcMain.on('get-question', function(event, arg) {
	var answers = fileUtils.readAnswers(arg)
    event.sender.send('answers', answers)
})
