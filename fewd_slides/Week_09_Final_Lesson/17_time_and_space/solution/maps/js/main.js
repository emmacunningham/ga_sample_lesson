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
	    zoom: 5,
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	  };

	    var mapElement = $("#map-container")[0];
	    map = new google.maps.Map(mapElement, mapProp);
	}
	initializeMap();


	$("#latlng-button").click(latLngButton);

	function latLngButton() {
		// Get inputs for latlng
		var lat = $("#lat-input").val();
		var lng = $("#lng-input").val();

		// Set new map center
		map.setCenter(new google.maps.LatLng( lat, lng ) );

	}

	$("#map-button").click(mapButton);

	function mapButton() {
		if (place != undefined) {
			var lat = place.geometry.location.lat();
			var lng = place.geometry.location.lng();			
			map.setCenter(new google.maps.LatLng(lat, lng));
			map.setZoom(18);
		}

	}	

	// Set up autocomplete functionality
	var input = $("#address-input")[0];
	var autocomplete = new google.maps.places.Autocomplete(input);

	autocomplete.addListener('place_changed', function() {
		place = autocomplete.getPlace();
		if (!place.geometry) {
		  window.alert("Autocomplete's returned place contains no geometry");
		  return;
		}
	});	

}

