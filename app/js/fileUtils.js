'user strict'
var filePath = 'file://' + __dirname

function getFilePath(){
	return filePath
}

module.exports = {
	getFilePath : getFilePath
}