$(document).ready(pageReady);

function pageReady() {
	var loopInterval;

	$(".play-icon").click(playAudio);
	function playAudio() {
		// Get the id of the element
		var elementId = $(this).attr("id");

		// Get the type of sound
		var soundType = elementId.replace("play-", "");

		// Create selector string
		var audioSelecta = "#" + soundType + "-sound";

		// Animation for scaling up icon to full size
		$(this).css("transform", "scale(1)");

		// Triggers the "play" event on the audio element
		$(audioSelecta).trigger("play");
	}

	$(".sample").on("ended", soundComplete);

	function soundComplete() {
		// Get the id of the element
		var elementId = $(this).attr("id");

		// Get the type of sound
		var soundType = elementId.replace("-sound", "");

		// Create selector string
		var iconSelecta = "#play-" + soundType;

		// Animation for scaling up icon to full size
		$(iconSelecta).css("transform", "scale(.8)");		
	}



}



