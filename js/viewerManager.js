function rotate(){
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