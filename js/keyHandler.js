
window.onload = function(){
	
	document.addEventListener("keyup", function(e) {
		if(e.keyCode){
			//Generic Key-Cases
			switch (e.keyCode){
				case VK_BACK:
						goPage(lastPage);
					break;
				default:
						break;
			}
			
			switch (currentPage){
				case 1:
					switch (e.keyCode){
					case VK_ENTER:
						goPage($(".focused").attr("name"));
						break;
					default:
							break;
					}
					break;
				case 2:
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
					break;
				case 3:
					switch (e.keyCode){
					case VK_ENTER:
						focused = $('.focused > .image').first().attr('src');
						goPage('photoViewer');
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
				case 4:
					break;
				case 5:
					break;
				case 6:
					break;
				default:
						break;
			}
//			//MAIN PAGE
//			if(currentPage == 1){
//				switch (e.keyCode){
//					case VK_ENTER:
//						goPage($(".focused").attr("name"));
//						break;
//					default:
//							break;
//					}
//			}
//			//FLICKR FORM
//			if(currentPage == 2){
//				switch (e.keyCode){
//					case VK_ENTER:
//						//Initiate keyboard
//				    	activateKeypad('#testInput');
//				    	//Select inputs for the form...
//				    	//...or try to Login
//						break;
//					case VK_RIGHT:
//					case VK_UP:
//					case VK_DOWN:
//					case VK_LEFT:
//						e.preventDefault();
//						break;
//					default:
//							break;
//				}
//			}
//			//FLICKR GALLERY
//			if(currentPage == 3){
//				switch (e.keyCode){
//				case VK_ENTER:
//					focused = $('.focused > .image').first().attr('src');
//					goPage('photoViewer');
//					break;
//				case VK_UP:
//					e.preventDefault();
//					window.scrollBy(0, -280);
//					break;
//				case VK_DOWN:
//					e.preventDefault();
//					window.scrollBy(0, 280);
//					break;
//				default:
//						break;
//				}
//			}
			//PHOTO VIEWER
			if(currentPage == 4){
				switch (e.keyCode){
				case VK_ENTER:
					break;
				default:
						break;
				}
			}
			//EUROPE MAP
			if(currentPage == 5){
				switch (e.keyCode){
				case VK_ENTER:
					goPage('countryGallery');
					break;
				default:
						break;
				}
			}
			//COUNTRY GALLERY
			if(currentPage == 6){
				switch (e.keyCode){
				case VK_ENTER:
					break;
				default:
						break;
				}
			}
		}
			
	},false);
};