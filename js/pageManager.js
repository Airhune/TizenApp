
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
			
			break;
		default:
			console.log("Error goPage");
		break;
	}
}