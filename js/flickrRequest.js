/**
 * Finds flickr user id from his username
 * @param username taked from the form
 */
function getMyFlickrId(username){
	//Search user from username
	var url = 'https://api.flickr.com/services/rest/?&method=flickr.people.findByUsername&api_key=4db0036c5a3de87a0bb36e2d99b24fec&username=' + username;
	var user_id;
	
	var xmlhttp = new XMLHttpRequest();
	  xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	xmlDoc = this.responseXML;
	    	txt = "";
	    	x = xmlDoc.getElementsByTagName("user");
	    	user_id = $(x['0']).attr("id");
	    	
	    	s = xmlDoc.getElementsByTagName("rsp");
	    	status = $(s['0']).attr("stat");
	    	if(status === 'ok'){
		    	getMyFlickrPhotosInfo(user_id); 
	    	}
	    	else{
	    		goPage('flickrForm');
	    		formErrorMessage('User do not exists');
	    	}
	    }
	  };
	  xmlhttp.open("GET", url, true);
	  xmlhttp.send();
}

/**
 * Get all the photos and their information from usernameId
 * @param id from the user
 */
function getMyFlickrPhotosInfo(id){
		
	var url = 'https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=4db0036c5a3de87a0bb36e2d99b24fec&user_id=' + id;
	photos = new Array();
	$.ajax({
		  type: "GET",
		  dataType: "xml",
	      url : url,
	      success : function(response) {
	    	$(response).find("photo").each(function(){
	    		 var photo_id = $(this).attr("id");
	    		 var photo_title = $(this).attr("title");
	    		 var photo_server = $(this).attr("server");
	    		 var photo_farm = $(this).attr("farm");
	    		 var photo_secret = $(this).attr("secret");
	    		 var photo_url = 'https://farm' + photo_farm + '.staticflickr.com/' + photo_server + '/' + photo_id + '_' + photo_secret + '.jpg';
	    		 
	    		 photos.push({id: photo_id, server: photo_server, farm: photo_farm, secret: photo_secret, url: photo_url});
	    	
	    	})
	    	if(photos.length > 0){
		    	getPhotoGeo(photos);
	    	}
	    	else{
	    		goPage('flickrForm');
	    		formErrorMessage("User don't have public images");
	    	}	    	
	      }
	});
}

/**
 * Get the geolocation of the previously listed photos
 * @param photos previously listed
 */
function getPhotoGeo(photos){
	var aux = new Array();
	countries = new Array();
	for (i = 0; i < photos.length; i++){
		var url = 'https://api.flickr.com/services/rest/?&method=flickr.photos.getInfo&api_key=4db0036c5a3de87a0bb36e2d99b24fec&photo_id=' + photos[i].id + '&secret=' + photos[i].secret;
					
		$.ajax({
			  type: "GET",
			  dataType: "xml",
		      url : url,
		      success : function(response) {
		    	  if($(response).find("country").length == 0){
		    		  
		    		  var photo_id = $(response).find("photo")[0].id;
		    		  aux.push({ id: photo_id, loc: ""});
		    		  
		    	  }else {
		    		  var photo_loc = $(response).find("country")[0].innerHTML;
		    		  var photo_id = $(response).find("photo")[0].id;
				      
		    		  aux.push({id: photo_id, loc: photo_loc});
		    	  }
		        
		    	
		    	  if (aux.length == photos.length){		    		  
		    		  for(j = 0; j < photos.length; j++){
		    			  for (h = 0; h < aux.length; h++){
		    				  if (photos[j].id == aux[h].id){
		    					  photos[j].location = aux[h].loc; 
		    				  }
		    			  }
		    		  }
		    		  showFlickrPhotos(photos);
		    		  setMapLocations(photos);
		    	  }
		    	  
		      }
		
		});
			
	}
}


