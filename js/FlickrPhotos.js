function userAuthorization(oauth_token){
	var url = 'https://www.flickr.com/services/oauth/authorize?oauth_token=' + oauth_token;
	window.location.replace(url);
	console.log(url);
}

function requestToken(){
	authToken(function(data){
		var values;
		var oauth_token, oauth_token_secret;
		
	  	values = data.split('&');
	  	
	  	oauth_token = values['1'].split("=");
		console.log(oauth_token);
		
		oauth_token_secret = values['2'].split("=");
		console.log(oauth_token_secret);
	
		
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
	
	
//	console.log(oauth_nonce);
//	console.log(timestamp);
//	
//	var requestUrl = 'https://www.flickr.com/services/oauth/request_token' +
//				'?oauth_nonce=' + oauth_nonce +
//				'&oauth_timestamp=' + timestamp +
//				'&oauth_consumer_key=' + cKey +
//				'&oauth_signature_method=HMAC-SHA1'+
//				'&oauth_version=1.0' +
//				'&oauth_callback=oob';
//	
//	console.log(requestUrl);
	
}

function getMyFlickrPhotosInfo(id){
	var url = 'https://api.flickr.com/services/rest/?&method=flickr.people.getPhotos&api_key=4db0036c5a3de87a0bb36e2d99b24fec&user_id=' + id;
	
    var url_photo;
    
	$.ajax({
	      url : url,
	      success : function(response) {
	        console.log(response);
	        
	        var photos = response.getElementsByTagName("photo");
	        console.log(photos['0'])
	        var photo_id = photos['0'].id;
	        console.log(photo_id);
	        var photo_secret = photos['0'].secret;
	        console.log(photo_secret);
	        var photo_server = photos['0'].server;
	        console.log(photo_server);
	        var photo_farm = photos['0'].farm;
	        console.log(photo_farm);
	        
	        //url_photo = 'https://farm' + photo_server + '.staticflickr.com/' + photo_server + '/' + photo_id + '_' + photo_secret;
	        //console.log(url_photo);
	      }
		});
}

function getMyFlickrId(){
	//Busqueda del usuario mediante username
	var url = 'https://api.flickr.com/services/rest/?&method=flickr.people.findByUsername&api_key=4db0036c5a3de87a0bb36e2d99b24fec&username=Airhune';
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