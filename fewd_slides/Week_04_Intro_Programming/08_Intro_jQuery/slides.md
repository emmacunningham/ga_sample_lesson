![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - jQuery Intro

###Lesson #8 - Mar 2, 2016

"The devil is in the details, if you are ready." - <a href="https://www.youtube.com/watch?v=SFmGDSIgRSY">Marnie Stern</a>

---


##Agenda

*	Intro To Programming Reivew
*	Intro To jQuery
*	jQuery Basics
	*	File Structure
	*	Syntax
*	Adding Interactivity

---

##Exit tickets

##TODO: add questions + answers

---


##Intro To jQuery


###What Is jQuery?


####jQuery is a cross-browser JavaScript library designed to simplify the client-side scripting of HTML.

A JavaScript **library** is a set of functions written by other developers that you can use.  Usually, these simplify the native JavaScript methods you would have to use, so you can focus on scripting logic and behavior, and worry less about the details of programming language itself. 

---

##jQuery benefits

*	makes DOM manipulation simple (no more `document.getElementById('id-name');`)*	Cross browser - works the same in *all* browsers (yay!)*	Allows:
	*	Document traversal	*	CSS Manipulation	*	Event Handling	*	Animation	*	and more!

---

##Getting started with jQuery: Script Tags

Adding jQuery to your website:

```<script src="js/jquery-1.8.3.min.js"></script>``` - This method requires that you have a local copy of the jQuery source code in your project files.

**OR**

```<script src="https://code.jquery.com/jquery-1.12.1.min.js"></script>``` - no need to download anything, you are just using a CDN (Content Delivery Network) to retrieve this remotely.  **We will be using this method.**

---


##Syntax

__Syntax:__ Spelling and grammar rules of a language.


In a programming language, similar to a natural language (languages that humans speak natively), there are formal rules around how to write it. This is the syntax.


---

##JavaScript Syntax - Punctuation

*	Semicolon
*	Brackets
*	Parentheses
*	Quotation Marks

---

##JavaScript Syntax - Comments

	//Single Line Comments

	/* Multi line comments */

---


##jQuery Syntax

###$

`$` tells the browser to use a method from the jQuery library.  The most common use case for this will be using the `$` as a method itself to fetch a DOM element.  (We will cover other usages of `$` next week).

---

##jQuery Syntax - Selectors


Selectors are just like CSS

	$(".class").click();

Note: document.getElementById("foo").onclick = doSomething;

	function doSomething() {
    	// make something happen here
	}

In jQuery, this might look more like:

	$("#foo").click(doSomething);

	function doSomething() {
		// make something happen here
   	}


Note: We will certainly be discussing this in more detail, but in general jQuery let’s us grab some element from the page (`$('#foo')`), and do something with it (`$('#foo').click(doSomething);`). In this case, we grabbed an element with the id `foo` and used `.click()` to make a function run when the user clicks on `#foo`.

---


##jQuery Click Event

###.click()

A lot of JavaScript programming is about creating ways to detect *events* and respond to them.  Today we will focus on just one kind of event, the click event.  But the basics behind how we treat the click event will carry over to the way other events are *handled*.

**Events** are things that happen within the browser, usually triggered by user interaction.  Here are some common event types:

*	click
*	hover (shorthand for mouseenter and mouseleave)
*	drag
*	swipe
*	load

Anytime you **listen** for an **event**, you need to tell the browser what to do in response (this is called the **event handler**).  In jQuery, you wire up the **event handler** to the **event listener** like so:

	$("#foo").click(doSomething);

	function doSomething() {
		// make something happen here
		alert('I clicked on something!');
   	}

**Event handlers** are *always* **functions**.

---



![GeneralAssemb.ly](../../img/icons/code_along.png)
##jQuery Traffic Light

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Syntax Drill  

Open the following CodePen and follow the TODO comments in the JavaScript window to add interactivity with jQuery.  You do **NOT** need to import JavaScript here because we have already set it up for you in the CodePen.

CodePen link: http://codepen.io/emmacunningham/pen/vGOBXe

**Do your best to get through these drills on your own. You may need to utilize Google and look through some documentation.**

Solution code: http://codepen.io/emmacunningham/pen/WwvENp

---


##Adding Interactivity

Let's build an interactive Frequently Asked Questions page!

---


##Homework

*	<a href="../Assignment">Assignment #4</a>
*	Wireframe + Proposal for your <a href="../../Final_Project">final project</a>

---

##Exit Tickets - Lesson #8, Topic: Intro to jQuery

###Please fill out the <a href="https://docs.google.com/forms/d/1Iw2zghHfGgeM1p1G16F6kLi7KViv28tG3HVNnoM3PAc/viewform">exit ticket</a> before you leave
