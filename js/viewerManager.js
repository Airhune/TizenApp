function rotate(degrees){
//	var el = document.getElementById("mainPhoto");
//	var st = window.getComputedStyle(el, null);
//	var tr = st.getPropertyValue("-webkit-transform") ||
//	         st.getPropertyValue("-moz-transform") ||
//	         st.getPropertyValue("-ms-transform") ||
//	         st.getPropertyValue("-o-transform") ||
//	         st.getPropertyValue("transform") ||
//	         "FAIL";
//	
//	var values = tr.split('(')[1].split(')')[0].split(',');
//	var a = values[0];
//	var b = values[1];
//	
//	var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
//	
//	return angle;
	
	
	
	 var inner = document.getElementById("mainPhoto");
     offsetAngle = Math.atan(inner.offsetWidth / inner.offsetHeight);
     originalHeight = inner.offsetHeight;
     originalFactor = Math.sqrt(Math.pow(inner.offsetHeight, 2) + Math.pow(inner.offsetWidth, 2));
     var radians = degrees * Math.PI / 180,
         sum, result;
     if (degrees < 90) {
         sum = radians - offsetAngle;
     } else if (degrees < 180) {
         sum = radians + offsetAngle;
     } else if (degrees < 270) {
         sum = radians - offsetAngle;
     } else {
         sum = radians + offsetAngle;
     }
     var result = (originalHeight / Math.cos(sum)) / originalFactor;
     
     return result;
//     inner.style.webkitTransform = 'scale(' + result+ ')';
//     inner.style.transform = 'scale(' + result+ ')';
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