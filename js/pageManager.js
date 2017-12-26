
function removePage(pageContainerClass){
	if($("."+pageContainerClass).length > 0){
		$("."+pageContainerClass).remove();
	}
}

function goPage(numPage){
	switch (numPage){
		case "instagram":
			console.log("GOES INSTAGRAM GOES!")
			break;
		case "flickr":
			removePage("firstPage");
			createPage("flickrForm");
			console.log("GOES FLICKR GOES!")
			break;
		default:
			console.log("Error goPage");
		break;
	}
}

function createPage(numPage){
	switch (numPage){
		case "flickrForm":
//			<div class="container-fluid firstPage">
//			<div class="row-lg-4 logoHeader"> 
//				<img src="./img/instagram.jpg">
//			</div>
//	  		<div class="column">
//	  		
//			    <div class="row-lg-4 text-center" >
//			    	<img id="flickr" class="logoImg" src="./img/flickr.jpg" name="flickr" focusable>
//			    </div>
//			    
//			    <div class="row-lg-4 text-center" >
//			    	<img id="instagram" class="logoImg" src="./img/instagram.jpg" name="instagram" focusable>
//			    </div>
//			    <div class="row-lg-4 text-center" >
//			    	<img id="pinterest" class="logoImg" src="./img/pinterest.jpg" name="pinterest" focusable>
//			    </div>
//		  	</div>
			break;
		default:
			console.log("Error goPage");
		break;
	}
}