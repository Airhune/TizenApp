
window.onload = function(){
	var currentPage = 1;

	document.addEventListener("keydown", function(e) {
		if(e.keyCode){
			switch (e.keyCode){
				case VK_UP:
					break;
				case VK_ENTER:
					goPage($(".focused").attr("name"));
					break;
				default:
						break;
						
				}
			}
	},false);
};