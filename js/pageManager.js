
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
		case "europeMap":
			removePage("mainPage");
			createPage(numPage);
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
			var div_body = $('.mainContainer');
			
			var div_europeMap = $(document.createElement("div"));
				div_europeMap.attr('class','container-fluid europeMap');
			
			var div_bgImg = $(document.createElement("img"));
				div_bgImg.attr('src',"./img/m1.jpg");
				div_bgImg.attr('class',"bg");
				
			var div_countryPanel = $(document.createElement("div"));
			var p_countryPanel = $(document.createElement("p")).text("ESPAÑA");
				p_countryPanel.attr('class',"countryPanel");
				
				div_countryPanel.append(p_countryPanel);
				
				div_europeMap.append(div_bgImg);
				div_europeMap.append(div_countryPanel);
				
				//country-Buttons
				for(var i=0; i < countries.length; i++){
				    var button_country = $(document.createElement("button"));
						button_country.attr('class','countryButton');
						button_country.attr('focusable','');
						button_country.attr('id', countries[i].name);
						button_country.html(countries[i].numPhotos);
					
					div_europeMap.append(button_country);
				}
			
			div_body.append(div_europeMap);
			
			
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