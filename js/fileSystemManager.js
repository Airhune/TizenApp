function successCallback(archive) {
    console.log("Success, can now read from archive " + archive);
}

function errorCallback(error) {
    console.log("Error: " + error);
}

var documentsDir;
function onResolveSuccess(dir) {
	documentsDir = dir;
	console.log('el dir es'+documentsDir);
}
	 
function onResolveError(e) {
	console.log('message: ' + e.message);
}

window.onLoad = function(){
	console.log("onload");
	tizen.filesystem.resolve('documents', onResolveSuccess, onResolveError, 'rw');
};


//Initialize function
var init = function () {
	console.log("var init");
	//tizen.filesystem.resolve('documents', onResolveSuccess, onResolveError, 'rw');
	
};


