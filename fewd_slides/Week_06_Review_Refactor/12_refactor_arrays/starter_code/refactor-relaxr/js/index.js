$( document ).ready(pageReady);
function pageReady() {

	$(".readmore").click(readMore);
	$(".readless").click(readLess);
	$(".learnmore").click(learnMore);

	function readMore() {
		event.preventDefault();  
		$("#show-this-on-click1").slideDown();
		$(".readmore").hide();
		$(".readless").show();
	}

	function readLess() {
		event.preventDefault();  
		$("#show-this-on-click1").slideUp();
		$(".readmore").show();
		$(".readless").hide();
	}

	function learnMore() {
		event.preventDefault();  
		$("#show-this-on-click3").slideDown();
		$(".learnmore").hide();
		$(".readless").show();
	}

}

