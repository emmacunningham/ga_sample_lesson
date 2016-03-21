/**
* Create an array of names with Will, Nevan, and Jessica as values.
* Append each of these names to the class-list element using forEach. 
*/
$(document).ready(pageReady);

function pageReady() {
	var names = ["Nisa", "Khoi", "Sam", "Paul", "Naomi", "Kristina"];

	names.forEach(function (element, index) {
		$(".class-list").append("<li>" + element + "</li>");
	});


}

