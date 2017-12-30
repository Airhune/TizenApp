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

//USB TRYS
function writeToFile(){
	var newDir, newFile;
	tizen.filesystem.resolve("documents", function(dir) 
    {
       newDir = dir.createDirectory("newDir");
       newFile = newDir.createFile("newFilePath.txt");
       newFile.openStream(
        "w",
        function(fs) {
        	 fs.write("test test test");
        	 fs.close();
        }, function(e) {
        	 console.log("Error " + e.message);
        }, "UTF-8");
    });
}
	
function readFromFile(){
	tizen.filesystem.resolve("documents", function(dir) 
    {
       file = dir.resolve("newDir/newFilePath.txt");
       file.openStream(
    	    "r", 
		    function(fs) {
                var text = fs.read(file.fileSize);
                fs.close();
                console.log(text);
            }, function(e) {
                console.log("Error " + e.message);
            }, "UTF-8");
    });
}  