//Implement the red light using jQuery. Don't forget to add the script tags.

$("#stop-button").click(illuminateRed);
$("#slow-button").click(illuminateYellow);
$("#go-button").click(illuminateGreen);

function illuminateRed() {
	clearLights();

	$("#stop-light").css('background', 'red')
}

function illuminateYellow() {
	clearLights();

	$("#slow-light").css('background', 'yellow')
}

function illuminateGreen() {
	clearLights();

	$("#go-light").css('background', 'green')
}

function clearLights() {
	$(".bulb").css('background', 'black');
}