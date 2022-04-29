#Moonlander Typing Tutor

## Portfolio Project 2: Javascript Essentials

This project is built as part of the Code Institute Full Stack Software Development course. For this course, Dirk Ornee had to built a second Portfolio Project. Inspired by his recent purchase of a ZSA Moonlander keyboard, he decided to build an app that would help new users get familiar with their Moonlander.

# Testing

## Bugs

* The error 'Uncaught Typerror' would frequently pop up when typing text in the textbox, this was due to the Shift key not being able to be accessed in the DOM (no ID written for any Shift key). Furthermore, any capital letters were also not recognized in the DOM, again because there are not ID's for them. These issues were fixed by writing an extra for loop, eliminating event.key matches for any Shift keys and using the toLowerCase method to make any uppercase letters lowercase before accessing the DOM.
