 function showFlickrPhotos(photos){
	 var mainContainer = $('.mainContainer');
	 var flickrGallery = $("<div class='container-fluid flickrGallery'></div>");
	 	mainContainer.append(flickrGallery);
	 var logoHeader = $('<div class="row-lg-4"></div>');
	 var logo = $("<img class=logo src=./img/aperture.png>");
	 
	 logoHeader.append(logo);
	 $('.flickrGallery').append(logoHeader);
	 
	 var gallerydiv = $("<div class=gallerydiv></div>");
	 var gallery = $("<div id=gallery class=gallery></div>");
	 
	 $('.flickrGallery').append(gallerydiv);
	 
	 gallerydiv.append(gallery);
	 for (i = 0; i < photos.length; i++){
		 var photo = $("<div class='photo' focusable ></div>");
		 var photo = $("<div class=photo focusable></div>");

		 photo.append('<img class="image" id="' + photos[i].id +  '" src="'+ photos[i].url + '" />');
		 //gallery.append('<img class="image" src="'+ photos[i].url + '" />');
		 gallery.append(photo);
		 gallerydiv.append(gallery);

	 }
	 
	 var bar = $("<div id=bar class=bar></div>");
		 
	 var backB = $("<img class=galleryB src=./img/back_button.jpg>");
	 var mapB = $("<img class=galleryB src=./img/map_button.jpg>");
	 
	 bar.append(backB);
	 bar.append(mapB);
	 
	 $('.flickrGallery').append(bar);  
 }
 
 function setMapLocations(photos){
	 //Fill the country variable with the photos location...
	 //...Set first one as a reference
	 var country = {
			  name: photos[0].location,
			  numPhotos: 1,
			  id: photos[0].id,
			  url:[photos[0].url]
	 }
	 for(var i = 0; i < photos.length; i++){
		  var countryExists = false;
		  for(var u = 0; u < countries.length; u++){
			  //if location do not exist		    				
			  if(photos[i].location === countries[u].name){
				countryExists = true;
				break;
			  }
		  }	
		  if(countryExists){
			  countries[u].numPhotos++;
			  countries[u].url.push(photos[i].url);
		  }else{
			var country = {
					  name: photos[i].location,
					  numPhotos: 1,
					  id: photos[0].id,
					  url:[photos[i].url]
			  }
			countries.push(country);
		  }	
	 }
 }

 function showCountryPhotos(photos){
	 var mainContainer = $('.mainContainer');
	 var flickrGallery = $("<div class='container-fluid flickrGallery'></div>");
	 	mainContainer.append(flickrGallery);
	 var logoHeader = $('<div class="row-lg-4"></div>');
	 var logo = $("<img class=logo src=./img/aperture.png>");
	 
	 logoHeader.append(logo);
	 $('.flickrGallery').append(logoHeader);
	 
	 var gallerydiv = $("<div class=gallerydiv></div>");
	 var gallery = $("<div id=gallery class=gallery></div>");
	 
	 $('.flickrGallery').append(gallerydiv);
	 
	 gallerydiv.append(gallery);
	 for (i = 0; i < photos.length; i++){
		 var photo = $("<div class='photo' focusable ></div>");
		 var photo = $("<div class=photo focusable></div>");

		 photo.append('<img class="image" src="'+ photos[i] + '" />');
		 gallery.append(photo);
		 gallerydiv.append(gallery);

	 }
	 
	 var bar = $("<div id=bar class=bar></div>");
		 
	 var backB = $("<img class=galleryB src=./img/back_button.jpg>");
	 var mapB = $("<img class=galleryB src=./img/map_button.jpg>");
	 
	 bar.append(backB);
	 bar.append(mapB);
	 
	 $('.flickrGallery').append(bar);
}

function selectCountryPhotos(){
	countryPhotos = new Array();
	var current_className = $.caph.focus.controllerProvider.getInstance().getCurrentFocusItem().className.split(' ')[0];
	var current_id = $.caph.focus.controllerProvider.getInstance().getCurrentFocusItem().id;
	//if it's a countryButton
	if(current_className === 'countryButton'){
		//Check their name and found it in the countries variable 
		for(var i = 0; i < countries.length; i++){
			if(countries[i].name === current_id){
				removePage('europeMap');
				countryPhotos = countries[i].url;
				showCountryPhotos(countries[i].url);
				break;
			}
		}
	}
}

function nextPhoto(){
	console.log(countryPhotos);
	//if you are on country or full-gallery
	console.log(userPath[userPath.length-2]);
	//if last page was the gallery
	if(userPath[userPath.length-2] == 3){
		for(var i = 0; i < photos.length;i++){
			if(photos[i].id == focused.id){
				break;
			}
		}
		$('.viewPhoto').attr('src',photos[i+1].url);
		focused.url = photos[i+1].url;
		focused.id = photos[i+1].id;
	}else{
		for(var i = 0; i < countryPhotos.length; i++){
			if(countryPhotos[i] === $('.viewPhoto').attr('src')){
				break;
			}
		}
		$('.viewPhoto').attr('src',countryPhotos[i+1]);
	}
}

function previousPhoto(){
	//if last page was the gallery
	if(userPath[userPath.length-2] == 3){
		for(var i = 0; i < photos.length;i++){
			if(photos[i].id == focused.id){
				break;
			}
		}
		$('.viewPhoto').attr('src',photos[i+1].url);
		focused.url = photos[i-1].url;
		focused.id = photos[i-1].id;
	}else{ //last page was the country-gallery
		for(var i = 0; i < countryPhotos.length; i++){
			if(countryPhotos[i] === $('.viewPhoto').attr('src')){
				break;
			}
		}
		$('.viewPhoto').attr('src',countryPhotos[i-1]);
	}
}