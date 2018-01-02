
$(document).ready(function(){
	
	$.caph.focus.activate(function(nearestFocusableFinderProvider, controllerProvider) {
		
	    controllerProvider.onFocused(function(event, originalEvent) {
	    	
	    	
	    	//if map is ready
	    	if($('.countryPanel').length > 0){
	    		//set to the panel the value of the country
	    		$('.countryPanel').text($(event.currentTarget).attr('id'));
	    	}
	    	//if virtual key is focused set style
	    	if($(event.currentTarget).attr("class").split(' ')[0] === 'jQKeyboardBtn'){
	    		$(event.currentTarget).css('background','#26b3f7');
	    	}else{
	    		$(event.currentTarget).css({
					border: '3px solid red'
				});	
	    	}  
	    	
	    });
	    
	    controllerProvider.onSelected(function(event, originalEvent) {
	    	//if it's a virtual keyboard button
	    	if($(event.currentTarget).attr("class").split(' ')[0] === 'jQKeyboardBtn'){
	    		getKeyPressedValue(event.currentTarget);
	    	}
	    	//if it's the login button
	    	if(($(event.currentTarget).attr("id")) === 'loginButton'){
	    		//check the value of the input
	    		username = $('#testInput').val();

	    		if(username.length == 0){
	    			//some advice?
	    			console.log("Error message: username is empty");
	    		}
	    		else{
	    			goPage("flickrGallery");
	    		}	    		
	    	}
	    
		});
	    
		controllerProvider.onBlurred(function(event, originalEvent) {
			//if virtual key is focused set style
	    	if($(event.currentTarget).attr("class").split(' ')[0] === 'jQKeyboardBtn'){
	    		$(event.currentTarget).css('background','#424242');
	    	}else{
	    		$(event.currentTarget).css({
					border : '0px solid transparent'
	        	});
	    	}
        	
	    });
	
	});	
});