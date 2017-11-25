

window.onload = function(){
	var currentPage = 1;

	document.addEventListener("keydown", function(e) {
		if(e.keyCode){
			switch (e.keyCode){
				case VK_UP:
					console.log("UP");
				break;
				default:
					console.log("nagh");
						break;
						
				}
			}
	},false);
}