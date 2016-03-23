$(document).ready(pageReady);

function pageReady() {

	// Set up click listener on mobile nav button
	$(".mobile-nav-button").click(toggleMobileNav);

	function toggleMobileNav() {

		// Toggle sliding the mobile nav container to reveal/hide
		$(".mobile-nav").slideToggle();

		// Toggle applying class to the hamburger lines to trigger animation
		$(".line").toggleClass("active");
	}
}

