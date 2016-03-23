![GeneralAssemb.ly](https://github.com/generalassembly/ga-ruby-on-rails-for-devs/raw/master/images/ga.png "GeneralAssemb.ly")

#FEWD - Converting Non-Responsive To Responsive

###Lesson #14 - March 23, 2016


---


##Agenda

*	Exit Tickets
*	Hamburger Nav Code-a-long
*	From fixed-width to responsive
*	Make Startup Matchmaker responsive Lab

---
## Exit Tickets

*	some best practices for responsive design?

Answer: 

*	Keep your media queries at the bottom of your CSS file
*	Write your media queries in *descending order* (larger screen sizes come first)
*	Some tips for the *design* side of making your page responsive: <a href="http://thenextweb.com/dd/2015/10/19/10-rules-of-best-practice-for-responsive-design">10 rules of best practice for responsive design</a>

---
## Exit Tickets

*	how to show or hide with css in a media query

Answer: Showing/Hiding in a media query is a matter of setting up your CSS using the `display` property.  For example:

	.example-container {
		display: none;
	}
	
	@media only screen and (max-width: 768px) {
		display: block;	
	}
	
In the above `example-container` will not be visible in the desktop view, but after the 768px breakpoint, it will be.	

*	How do we make a mobile hamburger nav?

Answer: our first topic tonight!

---

## Mmm... burgers

![GeneralAssemb.ly](../../img/icons/code_along.png)


---

##Responsive Design strategies

*	Convert widths to percentages
*	Size fonts in ems
*	Identify columns that can be stacked

---


##Responsive Design strategies

*	Determine what content is extra
	*	Does that h1 need an h2 under it?
	*	Will that one liner get the visitor to understand my site or is it extra?

*	Determine what content needs to be visible
	*	Is it necessary to show my entire nav if there are other ways of getting to navigation?

*	Identify extra styling
	*	Do my columns need a border if they’re stacked?
	*	Do I need to move or resize any containers for the mobile view?


---



![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Startup Matchmaker

---

##Homework

*	Assignment #7 
*	Finish up HTML/CSS code for your Final Project 

---

##Exit Tickets - Lesson #14, Topic: Responsive Lab

###Please fill out the <a href="https://docs.google.com/forms/d/1Iw2zghHfGgeM1p1G16F6kLi7KViv28tG3HVNnoM3PAc/viewform">exit ticket</a> before you leave



