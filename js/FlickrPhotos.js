function userAuthorization(oauth_token){
	var url = 'https://www.flickr.com/services/oauth/authorize?oauth_token=' + oauth_token;
	window.location.replace(url);
	//console.log(url);
}

function requestToken(){
	authToken(function(data){
		var values;
		var oauth_token, oauth_token_secret;
		
	  	values = data.split('&');
	  	
	  	oauth_token = values['1'].split("=");
		//console.log(oauth_token);
		
		oauth_token_secret = values['2'].split("=");
		//console.log(oauth_token_secret);
	
		
		userAuthorization(oauth_token['1']);
		

	});
}

function authToken(handleData){
	var oauth_nonce = Math.floor((Math.random() * 100000000) + 1);
	var timestamp = Date.now();
	var cKey = '4db0036c5a3de87a0bb36e2d99b24fec';
	var cSecret = 'b2936adcdaf79886';
	var tokenSecret;
	
	var key = cSecret + "&";
	var base = 'GET&https%3A%2F%2Fwww.flickr.com%2Fservices%2Foauth%2Frequest_token&oauth_callback%3Doob%26oauth_consumer_key%3D4db0036c5a3de87a0bb36e2d99b24fec%26oauth_nonce%3D51288000%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D1512383573847%26oauth_version%3D1.0';
	
	var firma = 'KA7l0tfrCYGUPO1hyYklSyWvxgQ=';
	
	var url = 'https://www.flickr.com/services/oauth/request_token?oauth_callback=oob&oauth_consumer_key=4db0036c5a3de87a0bb36e2d99b24fec&oauth_nonce=51288000&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1512383573847&oauth_version=1.0&oauth_signature=KA7l0tfrCYGUPO1hyYklSyWvxgQ=';
	
	var r = $.ajax({
      url : url,
      success : function(response) {
        handleData(response);
      }
	});
	 
}

function flickrForm(){
	$(".mainPage").empty();
	
	$form = $("<form></form>");
	
	$form.append('<p>Username</p>');
	$form.append('<input type="text" name="name" placeholder="username">');
	$form.append('<input onclick= "getForm()" type="button" value="Accept">');
	$(".mainPage").append($form);
	
	console.log("flickr form");
}

 function getForm(){
	 console.log($('form').serializeArray());
	 var username = $('form').serializeArray()[0].value;
	 $(".mainPage").empty();
	 getMyFlickrId(username);
 }
 
 function showFlickrPhotos(photos){
	 for (i = 0; i < 20; i++){
		 $('.mainPage').append('<img src="'+ photos[i].url + '" />');
	 }
 }

function getMyFlickrPhotosInfo(id){
		
	var url = 'https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=4db0036c5a3de87a0bb36e2d99b24fec&user_id=' + id;
	
	var photos = new Array();
    
	$.ajax({
		  type: "GET",
		  dataType: "xml",
	      url : url,
	      success : function(response) {
	        //console.log(response);
	    	$(response).find("photo").each(function(){
	    		 var photo_id = $(this).attr("id");
	    		 var photo_server = $(this).attr("server");
	    		 var photo_farm = $(this).attr("farm");
	    		 var photo_secret = $(this).attr("secret");
	    		 var photo_url = 'https://farm' + photo_farm + '.staticflickr.com/' + photo_server + '/' + photo_id + '_' + photo_secret + '.jpg';
	    		 
	    		 photos.push({id: photo_id, server: photo_server, farm: photo_farm, secret: photo_secret, url: photo_url});
	    	
	    	})
	    	
	    	getPhotoGeo(photos);
	    	
	      }
	});
	
	
	
}

function getPhotoGeo(photos){
	var aux = new Array();
	
	for (i = 0; i < photos.length; i++){
		var url = 'https://api.flickr.com/services/rest/?&method=flickr.photos.getInfo&api_key=4db0036c5a3de87a0bb36e2d99b24fec&photo_id=' + photos[i].id + '&secret=' + photos[i].secret;
					
		$.ajax({
			  type: "GET",
			  dataType: "xml",
		      url : url,
		      success : function(response) {
		    	  console.log(response);

		    	  if($(response).find("country").length == 0){
		    		  
		    		  var photo_id = $(response).find("photo")[0].id;
		    		  aux.push({ id: photo_id, loc: ""});
		    		  
		    	  }else {
		    		  var photo_loc = $(response).find("country")[0].innerHTML;
		    		  var photo_id = $(response).find("photo")[0].id;
				      
		    		  aux.push({id: photo_id, loc: photo_loc});
		    	  }
		        
		    	
		    	  if (aux.length == photos.length){
		    		  console.log("macheo");
		    		  
		    		  for(j = 0; j < photos.length; j++){
		    			  for (h = 0; h < aux.length; h++){
		    				  if (photos[j].id == aux[h].id){
		    					  photos[j].location = aux[h].loc; 
		    				  }
		    			  }
		    		  }
		    		  
		    		  console.log(photos);
		    		  showFlickrPhotos(photos);
		    	  }
		    	  
		      }
		
		});
			
	}
	
	console.log(aux);
}

function getMyFlickrId(username){
	//Busqueda del usuario mediante username
	var url = 'https://api.flickr.com/services/rest/?&method=flickr.people.findByUsername&api_key=4db0036c5a3de87a0bb36e2d99b24fec&username=' + username;
	var user_id;
	
	var xmlhttp = new XMLHttpRequest();
	  xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	xmlDoc = this.responseXML;
	    	txt = "";
	    	x = xmlDoc.getElementsByTagName("user");
	    	user_id = $(x['0']).attr("id");
	    	getMyFlickrPhotosInfo(user_id); 
	    }
	  };
	  xmlhttp.open("GET", url, true);
	  xmlhttp.send();
}