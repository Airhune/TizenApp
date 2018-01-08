
$(document).ready(function(){
	
	/**
	 * Initiate Caph
	 */
	$.caph.focus.activate(function(nearestFocusableFinderProvider, controllerProvider) {
		
		/**
		 * Events for the focused elements
		 */
	    controllerProvider.onFocused(function(event, originalEvent) {//if map is ready
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
	    
	    /**
		 * Events for the selected elements
		 */
	    controllerProvider.onSelected(function(event, originalEvent) {
	    	//if it's a virtual keyboard button
	    	if($(event.currentTarget).attr("class").split(' ')[0] === 'jQKeyboardBtn'){
	    		getKeyPressedValue(event.currentTarget);
	    	}
	    
		});
	    
	    /**
		 * Events for the blurred elements
		 */
		controllerProvider.onBlurred(function(event, originalEvent) {
			//if virtual key is focused set style
	    	if($(event.currentTarget).attr("class").split(' ')[0] === 'jQKeyboardBtn'){
	    		$(event.currentTarget).css('background','#424242');
	    	}else if($(event.currentTarget).attr("class").split(' ')[0] === 'logoImg'){
	    		$(event.currentTarget).css({
					border : '3px solid transparent'
	        	});
	    	}else{
	    		$(event.currentTarget).css({
					border : '0px solid transparent'
	        	});
	    	}
        	
	    });
	
	});	
});