# Moonlander Typing Tutor

## Portfolio Project 2: Javascript Essentials

This project is built as part of the Code Institute Full Stack Software Development course. For this course, Dirk Ornee had to built a second Portfolio Project. Inspired by his recent purchase of a ZSA Moonlander keyboard, he decided to build an app that would help new users get familiar with their Moonlander.

## Credits

### Code

* For the WPM calculator function two sources were used:
  * [Bobby Hadz Blog](https://bobbyhadz.com/blog/javascript-count-occurrences-of-each-element-in-array) for extracting the amount of words typed by the user.
  * [Reema Alzohairi Blog](https://ralzohairi.medium.com/displaying-dynamic-elapsed-time-in-javascript-260fa0e95049) for calculating the time elapsed.
* To prevent a zoom in on smartphones after the input field is focused, ```user-scalable=no, user-scalable=0``` was used. This solution was found on [Stackoverflow (answer by rebpp)](https://stackoverflow.com/a/11882296/16545052).
* [Stackoverflow (answer by Kristjian)](https://stackoverflow.com/a/13625843/16545052) to make the keyboard size responively.
* [Creating a timer with JavaScript](https://dev.to/walternascimentobarroso/creating-a-timer-with-javascript-8b7) to built a timer for the coding option of the tying tutor.
* [Hide Navbar on Scroll Down](https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp) to make the title bar disappear and appear on scroll.

### Images

  
## Testing

### Bugs

* The error 'Uncaught Typerror' would frequently pop up when typing text in the textbox, this was due to the Shift key not being able to be accessed in the DOM (no ID written for any Shift key). Furthermore, any capital letters were also not recognized in the DOM, again because there are not ID's for them. These issues were fixed by writing an extra for loop, eliminating event.key matches for any Shift keys and using the toLowerCase method to make any uppercase letters lowercase before accessing the DOM.

