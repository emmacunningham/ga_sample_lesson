$(document).ready(function(){


	var images = ["images/food1.jpg", "images/food2.jpg", "images/food3.jpg", "images/food4.jpg", "images/food5.jpg"];
	var index = 0;

	$("#prev").click(previousImage);
	function previousImage() {
		if (index > 0) {
			index = index - 1;
		}
		else {
			index = images.length - 1;
		}
		console.log(index);
		changeImage(index);
	}

	$("#next").click(nextImage);
	function nextImage() {
		if (index + 1 < images.length) {
			index = index + 1;
		}
		else {
			index = 0;
		}
		console.log(index);
		changeImage(index);
	}

	function changeImage(index) {
		$("img").attr("src", images[index]);
	}


});