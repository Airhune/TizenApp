var degrees = 0;
var slideIndex = 0;
/**
 * Set the rotator object, to rotate the image without breaking the container
 */
var setRotator = (function () {

    var setRotation,
        setScale,
        offsetAngle,
        originalHeight,
        originalFactor;

    setRotation = function (degrees, scale, element) {
        element.style.webkitTransform = 'rotate(' + degrees + 'deg) scale(' + scale + ')';
        element.style.transform = 'rotate(' + degrees + 'deg) scale(' + scale + ')';
    };

    getScale = function (degrees) {

        var radians = degrees * Math.PI / 180,
            sum;
       if (degrees < 90) {
            sum = radians - offsetAngle;
       } else if (degrees < 180) {
           sum = radians + offsetAngle;
        } else if (degrees < 270) {
            sum = radians - offsetAngle;
        } else {
            sum = radians + offsetAngle;
       }
        return Math.abs((originalHeight / Math.cos(sum)) / originalFactor);
    };

    return function (inner) {

        offsetAngle = Math.atan(inner.offsetWidth / inner.offsetHeight);
        
       
        
        originalHeight = inner.offsetHeight;
        originalFactor = Math.sqrt(Math.pow(inner.offsetHeight, 2) + Math.pow(inner.offsetWidth, 2));

        return {

            rotate: function (degrees) {
                setRotation (degrees, getScale(degrees), inner);
            }
        }
    };

}());

/**
 * Rotate the inner element 90 degrees according to the wise 
 * @param wise direction to rotate, could be clock or counterclock
 */
function rotateDeg(wise){
	var outer = document.getElementById('inner'),
    inner = document.getElementById('mainPhoto'),
    rotator = setRotator(inner);

	if(wise == 'clock'){
		degrees += 90;
	} else{
		degrees -= 90;
	}


    if (degrees >= 360) {
        degrees = 0;
    }

    rotator.rotate(degrees);
	
}

/**
 * Gets the photo fullscreened
 * @returns {Number} index of the selected photo in the photos array 
 */
function getActualPhoto(){
	if(userPath[userPath.length-3] == 3){
		for(var i = 0; i < photos.length;i++){
			if(photos[i].url == document.getElementById("fullscreenPhoto").src){
				break;
			}
		}
	} else{
		for(var i = 0; i < countryPhotos.length;i++){
			if(countryPhotos[i] == document.getElementById("fullscreenPhoto").src){
				break;
			}
		}
	}
	return i;
}

/**
 * Set the start to the automatic reproduction of the images
 * @param index of the current image to start the automatic display
 */
function slideShow(index){
	slideIndex = index - 1;
	
	timer = window.setInterval(nextSlide, 2500);
}

/**
 * Put the next photo slide on the screen
 */
function nextSlide(){
	slideIndex++;
	
	if(userPath[userPath.length-3] == 3){

		if (slideIndex >= photos.length){
			slideIndex = 0;
		}
		
		var file = photos[slideIndex];
		var url =  photos[slideIndex].url;
		
	} else if (userPath[userPath.length-3] == 6){

		if (slideIndex >= countryPhotos.length){
			slideIndex = 0;
		}
		
		var file = countryPhotos[slideIndex];
		var url =  countryPhotos[slideIndex];
	}
	
	if(document.getElementById("fullscreenPhoto")!== null){
		document.getElementById("fullscreenPhoto").src = url;
	}else{
		console.log("stop that fukin taaaim");
		window.clearTimeout(timer);
	}
}

/**
 * Navigate forward on the viewer, set the next photography on the viewer
 */
function nextPhoto(){	
	//Si estas en fullscreen i l'anterior es la galeria de flickr
	if(userPath[userPath.length-1] == 7 && userPath[userPath.length-3] == 3){
		for(var i = 0; i < photos.length;i++){
			if(photos[i].id == focused.id){
				break;
			}
		}
		$('.fullscreenPhoto').attr('src',photos[i+1].url);
		focused.url = photos[i+1].url;
		focused.id = photos[i+1].id;
	} else {
		//Si estas en fullscreen i l'anterior es la coutry galery
		if(userPath[userPath.length-1] == 7 && userPath[userPath.length-3] == 6){
			for(var i = 0; i < countryPhotos.length; i++){
				if(countryPhotos[i] === $('.fullscreenPhoto').attr('src')){
					break;
				}
			}
			$('.fullscreenPhoto').attr('src',countryPhotos[i+1]);
		} else {
			//Si estas al viewer i vens de la galeria de flickr
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
				//Si vens de la country galeria
				for(var i = 0; i < countryPhotos.length; i++){
					if(countryPhotos[i] === $('.viewPhoto').attr('src')){
						break;
					}
				}
				$('.viewPhoto').attr('src',countryPhotos[i+1]);
			}
		}
	}	
}

/**
 * Navigate backward on the viewer, set the next photography on the viewer
 */
function previousPhoto(){
	
	//Si estas en fullscreen i l'anterior es la galeria de flickr
	if(userPath[userPath.length-1] == 7 && userPath[userPath.length-3] == 3){
		for(var i = 0; i < photos.length;i++){
			if(photos[i].id == focused.id){
				break;
			}
		}
		$('.fullscreenPhoto').attr('src',photos[i-1].url);
		focused.url = photos[i-1].url;
		focused.id = photos[i-1].id;
	} else {
		//Si estas en fullscreen i l'anterior es la coutry galery
		if(userPath[userPath.length-1] == 7 && userPath[userPath.length-3] == 6){
			for(var i = 0; i < countryPhotos.length; i++){
				if(countryPhotos[i] === $('.fullscreenPhoto').attr('src')){
					break;
				}
			}
			$('.fullscreenPhoto').attr('src',countryPhotos[i-1]);
		} else {
			//Si estas al viewer i vens de la galeria de flickr
			if(userPath[userPath.length-2] == 3){
				for(var i = 0; i < photos.length;i++){
					if(photos[i].id == focused.id){
						break;
					}
				}
				$('.viewPhoto').attr('src',photos[i-1].url);
				focused.url = photos[i-1].url;
				focused.id = photos[i-1].id;
			}else{
				//Si vens de la country galeria
				for(var i = 0; i < countryPhotos.length; i++){
					if(countryPhotos[i] === $('.viewPhoto').attr('src')){
						break;
					}
				}
				$('.viewPhoto').attr('src',countryPhotos[i-1]);
			}
		}
	}	
}