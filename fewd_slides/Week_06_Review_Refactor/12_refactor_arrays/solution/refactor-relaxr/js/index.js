$( document ).ready(pageReady);
function pageReady() {

	$(".readmore").click(readMore);
	$(".readless").click(readLess);

	function readMore() {
		event.preventDefault();  
		$(this).siblings(".hide").slideDown();
		$(this).hide();
	}

	function readLess() {
		event.preventDefault();  
		$(this).siblings(".hide").slideUp();
		$(this).hide();
		$(this).siblings(".readmore").show();
	}


}

