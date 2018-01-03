var degrees = 0;

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

function rotateDeg(){
	var outer = document.getElementById('inner'),
    inner = document.getElementById('mainPhoto'),
    rotator = setRotator(inner);

	
    degrees += 90;

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
