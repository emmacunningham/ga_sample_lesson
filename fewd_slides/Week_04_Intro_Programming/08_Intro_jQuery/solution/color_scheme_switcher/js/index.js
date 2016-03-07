$("#gray-button").click(switchGray);

$("#white-button").click(switchWhite);

function switchGray() {
	$("body").css({"background-color": "gray", "color": "white"});
	$("#active-color-text").text("Gray");
}

function switchWhite() {
	$("body").css({"background-color": "white", "color": "black"});
	$("#active-color-text").text("White");
}