$(document).ready(function(){
	var images = ["images/food2.jpg","images/food3.jpg","images/food4.jpg","images/food5.jpg","images/food6.jpg","images/food7.jpg"];
	var index = 0;

	$("#prev").click(previousImage);
	function previousImage(){

		if (index > 0) {
			index = index - 1;
		}
		else {
			index = images.length - 1;
		}
		changeImage(index);
	}

	$("#next").click(nextImage);
	function nextImage(){

		if (index + 1 < images.length) {
			index = index + 1;
		}
		else {
			index = 0;
		}	
		changeImage(index);
	}

	function changeImage(){
		$("#image-to-vote-on").attr("src", images[index]);
	}


});