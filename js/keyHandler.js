
window.onload = function(){
	
	document.addEventListener("keydown", function(e) {
		if(e.keyCode){
			
			//Generic Key-Cases
			switch (e.keyCode){
				//GO BACK
				case VK_BACK: //ToDo: find which keyboard key is back :)
						if(currentPage != 1){
							goPage(nameOfPage(currentPage-1));
						}
					break;
				default:
						break;
			}			
			
			
			switch (currentPage){
				//MAIN PAGE
				case 1:
					switch (e.keyCode){
						case VK_ENTER:
							goPage($(".focused").attr("name"));
							break;
						default:
								break;
						}
					break;
				//FLICKR FORM
				case 2:
					switch (e.keyCode){
						case VK_ENTER:
							//Initiate keyboard
					    	activateKeypad('#testInput');
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
					break;
				//FLICKR GALLERY
				case 3:
					switch (e.keyCode){
						case VK_ENTER:
							focused = $('.focused > .image').first().attr('src');
							if(focused.length > 0){
								goPage('photoViewer');
							}
							break;
						case VK_UP:
							e.preventDefault();
							window.scrollBy(0, -280);
							break;
						case VK_DOWN:
							e.preventDefault();
							window.scrollBy(0, 280);
							break;
						default:
								break;
					}
					break;
				//PHOTO VIEWER
				case 4:
					switch (e.keyCode){
						case VK_ENTER:
							break;
						default:
								break;
					}
					break;
				//EUROPE MAP
				case 5:
					switch (e.keyCode){
						case VK_ENTER:
							goPage('countryGallery');
							break;
						default:
								break;
					}
					break;
				//COUNTRY GALLERY
				case 6:
					switch (e.keyCode){
						case VK_ENTER:
							break;
						default:
								break;
					}
					break;
				default:
						break;
			}
		}
			
	},false);
};