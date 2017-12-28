
$(document).ready(function(){
	
	$.caph.focus.activate(function(nearestFocusableFinderProvider, controllerProvider) {
		
	    controllerProvider.onFocused(function(event, originalEvent) {
	    	$(event.currentTarget).css({
				border: '3px solid red'
				});
	        });
	    
	    controllerProvider.onSelected(function(event, originalEvent) {
	    	//if it's a virtual keyboard button
	    	if($(event.currentTarget).attr("class").split(' ')[0] === 'jQKeyboardBtn'){
	    		getKeyPressedValue(event.currentTarget);
	    	}
	    	//if it's the login button
	    	if(($(event.currentTarget).attr("id")) === 'loginButton'){
	    		//check the value of the input
	    		var username = $('#testInput').val();
	    		if(username.length == 0){
	    			//some advice?
	    			console.log("Error message: username is empty");
	    		}
	    		else{
	    			console.log("Go to Pictures");
	    			//goPage("PictureDirectory");
	    		}	    		
	    	}
	    	
		});
	    
		controllerProvider.onBlurred(function(event, originalEvent) {
        	$(event.currentTarget).css({
				border : '3px solid transparent'
        	});
	    });
	
	});	
});