'user strict'
var path = require('path')
// YourQuestion\resources\app\app\js
var currentPath = __dirname
//YourQuestion
/*

这边不能用2个文件来存，猜测nconf只能打开一个文件流，写的时候是写在一个缓存里面的，哪个文件后写入，所有内容都写在
后写入的那个文件了，如果用2个文件，那么有一个文件为空，没有内容。因此存问题以  问题:[答案1,答案2,答案3...]的形式存入
存启发以：think:[think1,think2,think3..]的形式存入。问题和启发存到一个文件中
*/
var questionsFilePath =path.dirname(path.dirname(path.dirname(path.dirname(currentPath)))) + '/data.json'
// var thinkFilePath =path.dirname(path.dirname(path.dirname(path.dirname(currentPath)))) + '/thinkFilePath.json'
// var questionsFilePath = getUserHome() + '/question1.json'
var nconf1 = require('nconf').file({file : questionsFilePath})
// var nconf2 = require('nconf').file({file : thinkFilePath})

function saveAnswer(question, answers) {
	var answersInFile = readAnswers(question)
	if (!answersInFile) {
		answersInFile = new Array()
	}
	if (answers) {
		answersInFile.push(answers)
	}
	nconf1.set(question, answersInFile)
	nconf1.save()
}

function readAnswers(question){
	nconf1.load()
	return nconf1.get(question)
}
function saveThink(think) {
	var thinksInFile = readThinks()
	if (!thinksInFile) {
		thinksInFile = new Array()
	}
	if (think) {
		thinksInFile.push(think)
	}
	nconf1.set('think', thinksInFile)
	nconf1.save()
}

function readThinks(){
	nconf1.load()
	return nconf1.get('think')
}

function readAllQuestions(){
	var questionObjects = nconf1.load()
	var questions = new Array();
	for(key in questionObjects){
		questions.push(key)
	}
	return questions
}

module.exports = {
	saveAnswer : saveAnswer,
	readAnswers : readAnswers,
	questionsFilePath : questionsFilePath,
	readAllQuestions : readAllQuestions,
	saveThink : saveThink,
	readThinks : readThinks,
}