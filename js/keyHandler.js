
window.onload = function(){
	var currentPage = 2;

	document.addEventListener("keydown", function(e) {
		if(e.keyCode){
			if(currentPage == 1){
				changeBackground();
				switch (e.keyCode){
					case VK_ENTER:
						goPage($(".focused").attr("name"));
						currentPage = 2;
						break;
					default:
							break;
					}
			}
			if(currentPage == 2){
				switch (e.keyCode){
					case VK_ENTER:
						//Initiate keyboard
				    	activateKeypad('#testInput');
				    	//Select inputs for the form...
				    	
				    	//...or try to Login
			
						break;
					case VK_RIGHT:
					case VK_UP:
					case VK_DOWN:
					case VK_LEFT:
						e.preventDefault();
						break;
					default:
							break;
				}
			}
			
		}
			
	},false);
};



function changeBackground(){
	var image = $('.focused').attr("src");
	$('.firstPage').css('background-image','url('+image+')');
}