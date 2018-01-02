var degrees = 0;


window.onload = function(){
	
	document.addEventListener("keydown", function(e) {
		if(e.keyCode){

			//Generic Key-Cases
			switch (e.keyCode){
				//GO BACK
				case VK_BACK:
					if(currentPage != 1 ){
						userPath.pop();
						goPage(nameOfPage(userPath[userPath.length-1]));
						userPath.pop();
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
					    	//goes to flickrGallery according to username
					    	if(usernameIsValid()){goPage("flickrGallery");}
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
				//COUNTRY GALLERY
				case 6:
					switch (e.keyCode){
						case VK_ENTER:
							focused = $('.focused > .image').first().attr('src');
							if(focused.length > 0){goPage('photoViewer');}
							break;
						case VK_GREEN:
							goPage('europeMap');
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
						case VK_UP:
//							var angle;
//							if($('.viewPhoto').css('transform') == 'none'){
//								angle = 0;
//							} else{
//								var matrix = $('.viewPhoto').css('transform');
//								console.log(matrix);
//								var values = matrix.split('(')[1].split(')')[0].split(',');
//								var a = values[0];
//								var b = values[0];
//								
//								var scale = Math.sqrt(a*a + b*b);
//								
//								var sin = b/scale;
//								
//								angle = Math.round(Math.atan2(b,a) * (180/Math.PI));
//							}
//							console.log(angle);
//							
//							angle += 90;
//							
//							 $('.viewPhoto').css('transform','rotate('+angle+'deg)');
							
							 degrees += 90;
							
							$('.viewPhoto').css({
						        '-webkit-transform': 'rotate('+ degrees +'deg)',
						        '-moz-transform': 'rotate('+ degrees +'deg)',
						        'transform': 'rotate('+ degrees +'deg)'
						    });
							
							
							break;
						case VK_DOWN:
							degrees -= 90;
							$('.viewPhoto').css({
						        '-webkit-transform': 'rotate('+ degrees +'deg)',
						        '-moz-transform': 'rotate('+ degrees +'deg)',
						        'transform': 'rotate('+ degrees +'deg)'
						    });
							break;
						case VK_GREEN:
							goPage('europeMap');
							break;
						case VK_BLUE:
							$('.row-lg-4').empty();
							setTimeout(function() {
								  $('#navigate').fadeOut('fast');
								}, 30000)
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
			}
		}
			
	},false);
};