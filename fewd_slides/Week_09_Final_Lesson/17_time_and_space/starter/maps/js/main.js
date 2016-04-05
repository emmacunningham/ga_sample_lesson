$(document).ready(pageReady);

function pageReady() {

	// Initialize map variable.
	var map;

	// Initialize place variable (used by autocomplete later).
	var place;

	// Initializes new Google Map object with parameters
	function initializeMap() {
	  var mapProp = {
	    center: new google.maps.LatLng(51.508742,-0.120850),
	    zoom: 5
	  };

	    var mapElement = $("#map-container")[0];
	    map = new google.maps.Map(mapElement, mapProp);
	}
	initializeMap();


	$("#latlng-button").click(latLngButton);

	function latLngButton() {
		// Get inputs for latlng


		// Set new map center

	}

	$("#map-button").click(mapButton);

	function mapButton() {


	}	

	// Set up autocomplete functionality


}

