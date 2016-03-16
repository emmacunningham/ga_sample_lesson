$(document).ready(pageReady);

function pageReady() {

	$("#submit-btn").click(submitClick);

	function submitClick() {
		event.preventDefault();


		$("body").removeClass("la nyc austin sf sydney");

		var cityInput = $("#city-type").val();
		cityInput = cityInput.toLowerCase();

		if (cityInput === "los angeles" || cityInput === "la" || cityInput === "lax") {
			$("body").addClass("la");
		}
		else if (cityInput === "new york" || cityInput === "new york city" || cityInput === "nyc") {
			$("body").addClass("nyc");
		}
		else if (cityInput === "austin" || cityInput === "atx") {
			$("body").addClass("austin");
		}		


		else {
			console.log("not Los Angeles");
		}

	}


};