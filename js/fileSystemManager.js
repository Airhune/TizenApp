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

//Initialize function
var init = function () {
	
	tizen.filesystem.resolve('documents', onResolveSuccess, onResolveError, 'rw');
	
};


