$( document ).ready(pageReady);
function pageReady() {

	$(".readmore").click(readMore);
	$(".readless").click(readLess);
	$(".learnmore").click(learnMore);

	function readMore() {
		event.preventDefault();  
		$("#show-this-on-click").slidedown();
		$(".readmore").hide;
		$(".readless").show;
	}

	function readLess() {
		event.preventDefault();  
		$("#show-this-on-click").slideup();
		$(".readmore").show;
		$(".readless").hide;
	}

	function learnMore() {
		event.preventDefault();  
		$("#learnmoretext").slidedown();
		$(".learnmore").hide;
		$(".readless").show;
	}

}

