/**
* Create an array of names with Will, Nevan, and Jessica as values.
* Append each of these names to the class-list element using forEach. 
*/
$(document).ready(pageReady);

function pageReady() {

	var names = ["Will", "Nevan", "Jessica"];
	names.forEach(function(element, index) {
		console.log(index);
		$(".class-list").append("<li>"+element+"</li>");
	});

}

