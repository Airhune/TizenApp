
window.onload = function(){
	var currentPage = 1;

	document.addEventListener("keydown", function(e) {
		if(e.keyCode){
			if(currentPage == 1){
				changeBackground();
				switch (e.keyCode){
					case VK_ENTER:
						goPage($(".focused").attr("name"));
						currentPage = 2;
						break;
					default:
							break;
					}
				}
			
			
			}
			
	},false);
};

function changeBackground(){
	var image = $('.focused').attr("src");
	$('.firstPage').css('background-image','url('+image+')');
}