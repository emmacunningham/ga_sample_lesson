$( document ).ready(pageReady);
function pageReady() {

	$('#question1').click(toggleAnswer1);
	function toggleAnswer1() {
	  $('#answer1').slideToggle();
	}

	$('#question2').click(toggleAnswer2);
	function toggleAnswer2() {
	  $('#answer2').slideToggle();
	}

	$('#question3').click(toggleAnswer3);
	function toggleAnswer3() {
	  $('#answer3').slideToggle();
	}

}

