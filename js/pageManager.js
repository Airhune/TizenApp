
function goPage(numPage){
	removePage("mainContainer");
	createPage(numPage);
	setCurrentPage(numPage);
}

function removePage(pageContainerClass){
	if($("."+pageContainerClass).length > 0){
		$("."+pageContainerClass).empty();
	}
	if($(".jQKeyboardContainer").length){
		$(".jQKeyboardContainer").remove();
	}
}

function nameOfPage(number){
	var name;
	switch(number){
		case 1:
			name = 'firstPage';
			break;
		case 2:
			name = 'flickrForm';
			break;
		case 3:
			name = 'flickrGallery';
			break;
		case 4:
			name = 'photoViewer';
			break;
		case 5:
			name = 'europeMap';
			break;
		case 6:
			name = 'countryGallery';
			break;
		case 7:
			name = "fullscreen";
			break;
	}
	console.log(name);
	return name;
}

function setCurrentPage(numPage){
	switch (numPage){
		case "firstPage":
			currentPage = 1;
			break;
		case "flickrForm":
			currentPage = 2;
			break;
		case "flickrGallery":
			currentPage = 3;
			break;
		case "photoViewer":
			currentPage = 4;
			break;
		case "europeMap":
			currentPage = 5;
			break;
		case "countryGallery":
			currentPage = 6;
			break;
		case "fullscreen":
			currentPage = 7;
			break;
		default:
			console.log("Error goPage"+numPage);
		break;
	}
	userPath.push(currentPage);
}

function createPage(numPage){
	switch (numPage){
		case "firstPage":
	//		<div class="container-fluid firstPage">
	//	
	//			<div class="row-lg-4 logoHeader"> 
	//				<img class="logo" src="./img/aperture.png">
	//			</div>
	//			
	//	 		<div class="column">
	//	 			<div class="row-lg-4 text-center" >
	//			    	<p class="text">Choose your site</p>
	//			    </div>
	//			    <div class="row-lg-4 text-center" >
	//			    	<img id="flickr" class="logoImg" src="./img/flickr-large.png" name="flickrForm" focusable>
	//			    </div>
	//			    
	//			    <div class="row-lg-4 text-center" >
	//			    	<img id="instagram" class="logoImg" src="./img/usb-large.png" name="instagram" focusable>
	//			    </div>
	//			    
	//			    <div class="row-lg-4 text-center" >
	//			    	<img id="pinterest" class="logoImg" src="./img/instagram-large.png" name="pinterest" focusable>
	//			    </div> 
	//		  	</div>
	//		  	
	//		</div>
			var div_body = $('.mainContainer');
			
			var div_firstPage = $('<div class="container-fluid firstPage"></div>');
			
			var div_logoHeader = $('<div class="row-lg-4 logoHeader"></div>');
			div_logoHeader.append('<img class=logo src=./img/aperture.png>');
			
			var div_column = $('<div class=column></div>');
			
			var div_center_text = $('<div class="row-lg-4 text-center"></div>');
			div_center_text.append('<p class="text">Choose your site</p>');
			
			var div_center_usb = $('<div class="row-lg-4 text-center"></div>');
			div_center_usb.append('<img id="usb" class="logoImg" src="./img/usb-large.png" name="usb" focusable>')
			
			var div_center_flickr = $('<div class="row-lg-4 text-center"></div>');
			div_center_flickr.append('<img id="flickr" class="logoImg" src="./img/flickr-large.png" name="flickr" focusable>');
			
			var div_center_instagram = $('<div class="row-lg-4 text-center"></div>');
			div_center_instagram.append('<img id="instagram" class="logoImg" src="./img/instagram-large-disabled.png" name="instagram">');
			
			div_column.append(div_center_text);
			div_column.append(div_center_usb);
			div_column.append(div_center_flickr);
			div_column.append(div_center_instagram);
			
			div_firstPage.append(div_logoHeader);
			div_firstPage.append(div_column);
			
			div_body.append(div_firstPage);
			break;
			
		case "flickrForm":
			var div_body = $('.mainContainer');
			
			var div_lineT = $('<div class="container-fluid lineT"></div>');
			var div_lineB = $('<div class="container-fluid lineB"></div>');
			
			var div_flickrForm = $(document.createElement("div"));
				div_flickrForm.attr('class','container-fluid flickrForm');
				
			var div_header = $(document.createElement("div"));
				div_header.attr('class','header');
				div_header.append('<img class="logoLogin" src="./img/flickr-large.png" name="flickr">');
			
//			var div_span = $(document.createElement("div"));
//				div_span.html("Flick");
//			var span = $(document.createElement("span"));
//				span.html("r");
				
//				div_span.append(span);
//				div_header.append(div_span);
				
			var div_login = $(document.createElement("div"));
				div_login.attr('class','login');
			
			var input_text = $(document.createElement("input"));
				input_text.attr('type','text');
				input_text.attr('id','testInput');
				input_text.attr('class','jQKeyboard');
				input_text.attr('placeholder','username');
				input_text.attr('name','user');
				input_text.attr('value','');
				input_text.attr('autofocus','');
				input_text.attr('onblur','setFocusAgain()');
			var input_text = $("<input type='text' id='testInput' class='jQKeyboard' placeholder='username' name='user' value='' onblur='setFocusAgain()' autofocus>");
	
				
			var input_button = $(document.createElement("input"));
				input_button.attr('type','button');
				input_button.attr('id','loginButton');
				input_button.attr('value','Login');
				input_button.attr('focusable','');
	
				
				div_login.append(input_text);
				div_login.append(input_button);
				
				div_flickrForm.append(div_lineT);
				div_flickrForm.append(div_header);
				div_flickrForm.append(div_login);
				div_flickrForm.append(div_lineB);
				
				div_body.append(div_flickrForm);
				//ESSENTIAL!!!
				$.caph.focus.$$toAvailable(input_button);
			break;
			
		case "flickrGallery":
			getMyFlickrId(username);
			break;
		
		case "photoViewer":
			var div_body = $('.mainContainer');
			
			var logoHeader = $('<div class="row-lg-4"></div>');
			var logo = $("<img class=logo src=./img/aperture.png>");
			logoHeader.append(logo);

			var div_viewer = $('<div class="container-fluid photoViewer"></div>');
			div_viewer.append('<img class="viewPhoto" id="mainPhoto" src='+focused+' alt="">');
			
			var bar = $("<div id=navigate class='bar navigate'></div>");
			 
			
			var prevB = $("<img id=prev  class=viewerB src=./img/prev_button.jpg>");
			var playB = $("<img id=play name=play class=viewerB src=./img/play_button.jpg>");
			var nextB = $("<img id=next class=viewerB src=./img/next_button.jpg>");
			
			var rotateIB = $("<img id=rotateI name=rotateI class=viewerB src=./img/rotateI_button.jpg>");
			var rotateDB = $("<img id=rotateD name=rotateD class=viewerB src=./img/rotateD_button.jpg>");
			
			var fullscreenB = $("<img id=fullscreen name=fullscreen class=viewerB src=./img/fullscreen_button.jpg>");

			var mapB = $("<img id=map name=map class=viewerB src=./img/map_button.jpg>");
			
			bar.append(prevB);
			bar.append(playB);
			bar.append(nextB);
			bar.append(rotateDB);
			bar.append(rotateIB);
			bar.append(fullscreenB);
			bar.append(mapB);
			 
			
			
			div_body.append(logoHeader);
			div_body.append(div_viewer);
			div_body.append(bar);
			
			break;
		
		case "europeMap":
			var div_body = $('.mainContainer');
			
			var div_header = $('<div class="container-fluid headerLogo"></div>');
			
			var div_europeMap = $(document.createElement("div"));
				div_europeMap.attr('class','container-fluid europeMap');
			
			var div_bgImg = $(document.createElement("img"));
				div_bgImg.attr('src',"./img/m1.jpg");
				div_bgImg.attr('class',"bg");
				
			var div_countryPanel = $(document.createElement("div"));
			var p_countryPanel = $(document.createElement("p")).text("ESPAÑA");
				p_countryPanel.attr('class',"countryPanel");
				
				div_countryPanel.append(p_countryPanel);
				
				div_europeMap.append(div_bgImg);
				div_europeMap.append(div_countryPanel);
				
				//country-Buttons
				for(var i=0; i < countries.length; i++){
					
				    var button_country = $(document.createElement("button"));
						button_country.attr('class','countryButton');
						button_country.attr('id', countries[i].name);
						button_country.attr('name', countries[i].name);
						button_country.attr('focusable','');
						button_country.html(countries[i].numPhotos);
						
						if(i==0){
							button_country.attr('data-focusable-initial-focus','true');

						}
					div_europeMap.append(button_country);
					$.caph.focus.$$toAvailable(button_country);
				}
			
			div_body.append(div_header);
			div_body.append(div_europeMap);
			break;
			
		case "countryGallery":
			if(userPath[userPath.length - 1] == 6){
				showCountryPhotos(countryPhotos);
			}else{
				selectCountryPhotos();	
			}
			break;
			
		case "fullscreen":
			
			var div_body = $('.mainContainer');
			
			var div_viewer = $('<div class="container-fluid fullscreen"></div>');
			div_viewer.append('<img class="fullscreenPhoto" id="mainPhoto" src='+focused+' alt="">');
			
			var bar = $("<div id=navigate class='bar navigate'></div>");
			var fullscreenB = $("<img id=fullscreen name=fullscreen class=viewerB src=./img/fullscreen_button.jpg>");

			bar.append(fullscreenB);
			
			div_viewer.append(bar);
			
			div_body.append(div_viewer);
			
			setTimeout(function() {
				  $('#navigate').fadeOut('fast');
			}, 2000)
			

			break;
			
		default:
			console.log("Error goPage");
		break;
	}
}

