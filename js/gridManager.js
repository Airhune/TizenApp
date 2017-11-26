
$(document).ready(function(){
	
	$.caph.focus.activate(function(nearestFocusableFinderProvider, controllerProvider) {
	    controllerProvider.onFocused(function(event, originalEvent) {
	    	$(event.currentTarget).css({
				border: '3px solid red'
				});
	        });
	   
	        controllerProvider.onBlurred(function(event, originalEvent) {
	        	$(event.currentTarget).css({
					border : '3px solid transparent'
			});
	    });
	
	});	
});