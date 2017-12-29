
function removePage(pageContainerClass){
	if($("."+pageContainerClass).length > 0){
		$("."+pageContainerClass).remove();
	}
}

function goPage(numPage){
	switch (numPage){
		case "instagram":
			break;
		case "flickr":
			removePage("firstPage");
			createPage("flickrForm");
			break;
		default:
			console.log("Error goPage");
		break;
	}
}

function createPage(numPage){
	switch (numPage){
		case "firstPage":
//			<div class="container-fluid firstPage">
//		
//				<div class="row-lg-4 logoHeader"> 
//					<img class="logo" src="./img/aperture.png">
//				</div>
//				
//		 		<div class="column">
//		 			<div class="row-lg-4 text-center" >
//				    	<p class="text">Choose your site</p>
//				    </div>
//				    <div class="row-lg-4 text-center" >
//				    	<img id="flickr" class="logoImg" src="./img/flickr-large.png" name="flickr" focusable>
//				    </div>
//				    
//				    <div class="row-lg-4 text-center" >
//				    	<img id="instagram" class="logoImg" src="./img/usb-large.png" name="instagram" focusable>
//				    </div>
//				    
//				    <div class="row-lg-4 text-center" >
//				    	<img id="pinterest" class="logoImg" src="./img/instagram-large.png" name="pinterest" focusable>
//				    </div> 
//			  	</div>
//			  	
//			</div>
			break;
		case "flickrForm":
//			<div class="container-fluid flickrForm">			
//			<!-- <div class="body"></div>
//			<div class="grad"></div> -->
//			<div class="header">
//				<div>
//				Flick
//				<span>r</span>
//				</div>
//			</div>
//			<br>
//			<div class="login">
//				<input type="text" id="testInput" class="jQKeyboard" placeholder="username" name="user" value="" onblur="setFocusAgain()" autofocus><br>
//				<input type="button" id="loginButton" value="Login" focusable>
//			</div>
//		</div>
			break;		
		case "europeMap":
//			<div class="container-fluid mainContainer">
//			<div class="container-fluid europeMap">
//				<img class="bg" src="./img/m1.jpg" alt="">
//				<div>
//					<p class="countryPanel">SPAIN</p>
//				</div>
//				<button class="countryButton" id="spain" focusable data-focusable-initial-focus="true">4</button>
//				<button class="countryButton" id="portugal" focusable>2</button>
//				
//			</div>
			break;
		case "flickrGallery":
//			<div class="mainPage">
//			  <ul></ul>
//			   	<button onclick= "getPhotos()" type="button">Instagram</button>
//			   	<button onclick= "flickrForm()" type="button">Flickr</button>
//			   	<button onclick= "" type="button">USB</button>
//			  </div>
			break;
		default:
			console.log("Error goPage");
		break;
	}
}