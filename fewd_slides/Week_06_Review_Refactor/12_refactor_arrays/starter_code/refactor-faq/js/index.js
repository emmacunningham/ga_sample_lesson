$( document ).ready(pageReady);
function pageReady() {

	$("h2").click(toggleAnswer);
	function toggleAnswer() {
		$(this).next().slideToggle();
	}

}

