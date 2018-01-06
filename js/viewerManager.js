var degrees = 0;
var slideIndex = 0;
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
        
//        console.log("radians " + radians);
//        console.log("degrees " + degrees);
//        console.log("offset " + offsetAngle);
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

function rotateImg(){
	var el = document.getElementById("mainPhoto");
	var st = window.getComputedStyle(el, null);
	var tr = st.getPropertyValue("-webkit-transform") ||
	         st.getPropertyValue("-moz-transform") ||
	         st.getPropertyValue("-ms-transform") ||
	         st.getPropertyValue("-o-transform") ||
	         st.getPropertyValue("transform") ||
	         "FAIL";
	
	var values = tr.split('(')[1].split(')')[0].split(',');
	var a = values[0];
	var b = values[1];
	
	var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
	
	return angle;
}

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

function slideShow(index){
	slideIndex = index - 1;
	
	timer = window.setInterval(nextSlide, 2500);
}

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

