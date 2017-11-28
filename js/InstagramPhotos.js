//function AccessToken(value) {
//    this.value = value;
//}
//
//function getInstagramAccessToken() {
//    var hash = location.hash.replace('#', '')
//    if(hash.indexOf("access_token") >= 0 ){
//        instagramToken = new AccessToken(hash)
//    }else{
//        instagramToken = null;
//    }
//}
//
//var photoList_Instagram = []
//function getInstagramPhotoList(nextPageUrl) {
//
//    var requestUrl = 'https://api.instagram.com/v1/users/self/media/recent' + "?"
//    + instagramToken.value
//
//    if(nextPageUrl){
//        requestUrl = nextPageUrl;
//    }
//    $.ajax({
//        type : "GET",
//        dataType : "jsonp",
//        url : requestUrl,
//        success : function(response) {
//        	console.log(response);
//            response.data.forEach(function(photo){
//                photoList_Instagram.push(photo);
//            })
//            if (response.pagination.next_url) {
//
//                getInstagramPhotoList(response.pagination.next_url)
//
//            } else {
//                //your code here
//                foo(photoList_Instagram);
//            }
//        }
//    });
//}





function getPhotos(){
	var token = '647584891.9199f2e.61943c901362451babdf80aec4271147';
    var userid = 647584891;
    var num_photos = 4; 
    var username = "igarabastudio";
    
    $.ajax({
    	url: 'https://api.instagram.com/v1/users/search?q='+ username +'&access_token='+token,  	
    	dataType: 'jsonp',
    	type: 'GET',
    	data: {access_token: token, count: num_photos},
    	success: function(data){
     		console.log(data);
     		//userid = data.data['0'].id;
     		//console.log(data.data['0'].id)
    	},
    	error: function(data){
    		console.log(data); // send the error notifications to console
    	}
    });

    
  $.ajax({
	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
 		console.log(data);
		for( x in data.data ){
			//console.log(data);
			$('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
			if(data.data[x].location){
				$('ul').append('<p>'+data.data[x].location.name+'</p>');
			}
			// data.data[x].images.thumbnail.url - URL of image 150х150
			// data.data[x].images.standard_resolution.url - URL of image 612х612
			// data.data[x].link - Instagram post URL 
		}
	},
	error: function(data){
		console.log(data); // send the error notifications to console
	}
});
}