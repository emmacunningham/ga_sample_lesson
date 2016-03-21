$( document ).ready(pageReady);
function pageReady() {

	$(".readmore").click(readMore);
	$(".readless").click(readLess);

	function readMore() {
		event.preventDefault();  
		$(this).hide();
		$(this).siblings(".hide").slideDown();
	}

	function readLess() {
		event.preventDefault();  
		$(this).hide();
		$(this).prev().slideUp(1000, showReadMore);
	}

	function showReadMore() {
		$(this).siblings(".readmore").show();
	}

}

