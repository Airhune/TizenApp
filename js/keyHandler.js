
window.onload = function(){
	var currentPage = 3;
	var lastPage = 2;
	
	document.addEventListener("keydown", function(e) {
		if(e.keyCode){
			//Generic Key-Cases
			switch (e.keyCode){
				case VK_BACK:
						goPage(lastPage);
					break;
				default:
						break;
			}
			//MAIN PAGE
			if(currentPage == 1){
				changeBackground();
				switch (e.keyCode){
					case VK_ENTER:
						goPage($(".focused").attr("name"));
						lastPage = "flickrForm";
						currentPage = 2;
						break;
					default:
							break;
					}
			}
			//FLICKR FORM
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
			//FLICKR GALLERY
			if(currentPage == 3){
				switch (e.keyCode){
				case VK_ENTER:
					goPage('countryGallery');
					break;
				case VK_UP:
					e.preventDefault();
					window.scrollBy(0, -280); // Scroll 100px downwards
					break;
				case VK_DOWN:
					e.preventDefault();
					window.scrollBy(0, 280); // Scroll 100px downwards
					break;
				default:
						break;
				}
			}
			//EUROPE MAP
			if(currentPage == 4){
				switch (e.keyCode){
				case VK_ENTER:
					goPage('countryGallery');
					break;
				default:
						break;
				}
			}
		}
			
	},false);
};