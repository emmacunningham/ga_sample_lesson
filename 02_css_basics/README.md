![GeneralAssemb.ly](../../img/icons/instr_agenda.png)


##Lesson 02 - CSS Basics

###LEARNING OBJECTIVES

*	Apply and explain CSS “cascade” including: importance, specificity and inheritance.

*	Describe the DOM and draw simple DOM tree.

*	Predict image paths and apply relative paths to ```<img>``` and ```<a>``` tags.

*	Experiment with margin and border.

<br>

---

**Note:** Starter/Solution code for this lesson is located in the Week 1 [Assignment directory](../Assignment)


###SCHEDULE


| Time        | Section| GA ICLs| Comments |
| ------------- |:-------------|:-------------------|:----------------|
| _30 min_ |[Review](https://github.com/generalassembly-studio/FEWD_2.0.0/blob/FEWD_2.0.1/Week_01_Basics/02_css_basics/README.md#review) | What Tag Is It? |Review exercise. Students will be asked to Google how to implement: ```<nav> <img> and <hr>```. |
| _120 min_ | [Building A Simple Page](https://github.com/generalassembly-studio/FEWD_2.0.0/blob/FEWD_2.0.1/Week_01_Basics/02_css_basics/README.md#building-a-simple-page) | Build Your Portfolio | 3 part code along to demonstrate building a simple page. Topics include: ```<nav> <img> and <hr>```, colors, fonts intro to margin and padding. |
| _30 min_ | [Lab Time](https://github.com/generalassembly-studio/FEWD_2.0.0/blob/FEWD_2.0.1/Week_01_Basics/02_css_basics/README.md#lab-time) | Portfolio |Students create an "About" and a "Portfolio" page.|

=======


###LESSON PLANNING NOTES

Below you will find notes on each section from the proposed schedule above. These notes are  meant to help you plan for a great class.

===

#### ADDED - Lesson Opening:
Last class, we covered the nuts and bolts of HTML, and you learned how to think about converting structured content to HTML using the appropriate tags for each content type.

Now that we can create structured HTML Documents, we can get to some of the most exciting aspects of front-end development: styling our documents using CSS!

From the pre-work that you all did before our first day of class, you've gotten a glimpse of the power of CSS.  In pairs, get together with a classmate of yours and do your best at writing a CSS rule on the whiteboard (without looking up anything!), perhaps even a rule that you remember writing in your pre-work.

===


####Review
_Time: 30min_

*	This time is meant to review html tags, and linking to external style sheets. 

#####What Tag Is It?

| Exercise | [Solution File](../Assignment/solution)|
|:------------- |:-------------|
| __Time__ | 20 min| 
| __Topics__ | HTML Basics| 
| __Description__| Students are provided a png file of the completed website in the starter code folder. Their task is to write markup by identifying what tags to use and link to an external style sheet. |    
| __Notes__ | Prior to starting the exercise, let students know they will need to Google the ```<nav>``` and ```<img>``` tags. Reassure them that using Google to find information is something you do on a regular basis. | 

===

##### ADDED - Talking point
While you are all doing this exercise, I want to point out that you will probably need to use a couple of tags that we didn't cover in the last class.  Something that you'll find as you continue on your front-end development journey is that you might not always know how to do something off the top of your head **and that's ok!**.  Because the web is always in a perpetual state of change, it's impossible to know how everything works -- new things are being added to browser capabilities and standards all the time.  Great developers understand this and, rather than try to memorize everything that could be known, they rely on the powerful tool of the web itself to help them find the information, code samples, and documentation that will provide clarity.

**tl;dr** If you don't know what tag to use, what CSS selector to use, how a method works in JavaScript: don't fret!  Somebody on StackOverflow or elsewhere on the web will.  Using the web as a resource to continue your knowledge growth is not just perfectly acceptable -- working developers do this **daily**. 


####Building A Simple Page
__Time: 20min__

*	This section is meant to show students how to research tags. (```<nav> <img> and <hr>``). In addition to teaching students about HTML structure (Body, Head etc). We supplied a 3-part code along to help communicate these concepts.

There is more content about paths, colors and fonts in the skeleton slides.

####[Building Your About Me Page](../Assignment)

| Code along| [Solution File](../Assignment) |
| ------------- |:-------------|
| __Time__ | ~60 min| 
| __Topics__ | css, colors, fonts, linking to other pages, ```<style>```,```<img>```, ```<nav>```| 
| __Description__| An example to demonstrate the inner workings of css works. |   
| __Notes__ |  This is a three part code along | 
 

__Part 1:__ 

Review answers to "What Tag Is It?" This is an opportunity to formally introduce the img tag and (including relative / absolute paths) nav tag. Also is a chance to review structure of an html file ```<html> /<html>, <body>, <!doctype>, head, meta, title``` This is also the time to add to students' understanding of the DOM.

===

#### ADDED - Activity notes
While reviewing relative/absolute paths, show students screenshots of directory structures and ask them to whiteboard both the relative and absolute paths for each file within the directory.

===

	
	
__Part 2:__ 

Adding styling to your About me page. Note that the code introduces margin and padding. Next lesson, we will learn about the box model.

===

#### ADDED - CFU
Turn & Talk:

In your pre-work, you saw that you can style a page by writing your CSS rules within style tags, but now we are doing it a different way.  How does this way differ from writing our rules in a style tag and what are 3 benefits of doing it this way?

===


__Part 3:__

Add a link to the portfolio page. During lab time, add css to style the portfolio page. Remember to create a portfolio.html file with the students, as this is the first time they will see linking pages. This is also an opportunity to reiterate what was said about absolute and relative paths. During the lab time, students will complete any necessary styling and HTML for their resume page.

===

#### ADDED - CFU

CSS selector/property Taboo.  One student will come up and draw a CSS selector or property name from a bowl and need to elicit the name from their fellow classmates without using marked words that would make it too obvious.

===




####Lab Time
_Time: 30min_

*	Time for students to apply what they learned. Setup lab time by letting students know how to start the exercise and what is expected of them. **Point out**: The portfolio page they will continue  building should be personalized and will reflect just a portion of the projects they will build throughout the course.  Look at this as a time to set goals and get students excited about what they will be building. 

####Your Portfolio 

|Exercise |[Solution File](../Assignment) |
|:------------- |:-------------|
| __Topics__ | html, css, linking pages| 
| __Description__| Students create the portfolio page for themselves. |    
| __Notes__ | Point out that when they add the link tag to reference style.css, the styling from the codealong will be applied to their page.| 


===

### How the lesson plan relates to the presentation slides


####How might you have to edit the presentation slides to reflect your lesson plan?

The presentation slides included for this lesson are pretty barebones, so I will include slides with the prompts for CFUs as well as structuring it to better fit my actual lesson.

####Similarly, it helps to think through how you’ll reference both the lesson plan and the presentation slides while delivering your lesson. How will you use one or both resources (or not) during class? Why do you think this will help ensure effective lesson delivery?

I will primarily use the slides to reference prompts and key takeaways, while the majority of this lesson consists of a code-a-long.  I'll rely on my lesson notes to help keep the code-a-long on track and paced appropriately for student engagement.