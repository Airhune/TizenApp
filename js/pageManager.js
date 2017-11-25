function removePage(pageContainerClass){
	if($("."+pageContainerClass).length > 0){
		$("."+pageContainerClass).remove();
	}
}

function goPage(numPage){
	switch (numPage){
		case 1:
			break;
		default:
			console.log("Error goPage");
		break;
	}
}