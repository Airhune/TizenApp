function getPhotos(){
	var token = '647584891.9199f2e.61943c901362451babdf80aec4271147';
    var userid = 647584891;
    var num_photos = 4; 
    
    $.ajax({
    	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
    	dataType: 'jsonp',
    	type: 'GET',
    	data: {access_token: token, count: num_photos},
    	success: function(data){
     		console.log(data);
    		for( x in data.data ){
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