# Moonlander Typing Tutor

## Portfolio Project 2: Javascript Essentials

This project is built as part of the Code Institute Full Stack Software Development course. For this course, Dirk Ornee had to built a second Portfolio Project. Inspired by his recent purchase of a ZSA Moonlander keyboard, he decided to build an app that would help new users get familiar with their Moonlander.

## UX

### Structure of the website

The website is designed to have a good hierarchical flow. After seeing the big headed, which immediately makes clear this website is a typing tutor, the user's attention will fall on the sticky notes. These explain the purpose of the website and how to use it. The user will scroll down and start using the tutor. The refresh button is conveniently placed to allow for multiple runs. The site is fully responsive and can be used on any device with a physical or virtual keyboard.

### Color Scheme

### Features

### Futures Features

There is one main feature that could be added in the future, which is the option to let users enter their own string of text to type along with. This would become a submenu of the 'Text' button, which will now show a 'Standard Text' and 'Custom Text' option after being clicked. After clicking 'Custom Text' the user should be able to input their own text.
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
  
  [Moonlander logo](https://www.zsa.io/moonlander/) - taken from the ZSA website.

## Technologies used

[HTML](https://html.spec.whatwg.org/) - for basic structuring and semantic markup of the document.

[CSS](https://www.w3.org/Style/CSS/Overview.en.html) - to provide styling to the page.

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - to write the logic of the tutor.

[Font Awesome](https://fontawesome.com/) - for refresh button.

[Gitpod](https://www.gitpod.io/) - used to connect a browser based VScode to github.

[Github](https://github.com/) - used for version control and deployment of the website.

[Multi Device Website Mockup Generator](https://techsini.com/multi-mockup/index.php) - to create an image of the website shown on different devices.

## Testing

### Performance testing

The lighthouse tool in Chrome Developer Tools was used to test certain key factors of the website. This was a big help in spotting errors and keeping up with best practices in development. Scores can be seen in the image below:
![Lighthouse](assets/images/lighthouse.png)

As you can see, the scores are good, but the Accessibility score could be higher. This is caused by the ```user-scalable=no, user-scalable=0``` in the head element, that is there to prevent unwanted zooming behavior in the tutor when used on smartphones. Unfortunately it's not something that can be removed, so this is the highest the score will get (this is the only error).

### Compatibility testing

The site was tested by myself on an iPhone 11 pro and a 15 inch Macbook Pro. Friends and family also tested the website on Windows Desktops, the original (small) iPhone SE, and Android devices. The website was also tested in Chrome, Firefox and Safari. One issue was found: the Safari browser doesn't underline spaces in the tutor:
![underline](assets/images/underline-issue.png)
This is a browser specific issue that could not be resolved at this time.

### User Stories testing

### Code validation

To validate the code, multiple validators were used:

[Nu Html Checker](https://validator.w3.org/nu/)

Which returned only 1 warning, which again is the ```user-scalable=no, user-scalable=0``` code used in the head. No errors were thrown:
![HTML validator](assets/images/html-validator.png)

[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)

Which returned zero errors:
![CSS validator](assets/images/css-validator.png)

[JShint](https://jshint.com/)

To validate the JavasScript JShint was used. Besides throwing about a 100 missing semi-colon errors, there were also some undefined variables. After fixing this, JShint comes up completely clean:
![JShint](assets/images/js-validator.png)

### Bugs

* The error 'Uncaught TypeError' would frequently pop up when typing text in the textbox, this was due to the Shift key not being able to be accessed in the DOM (no ID written for any Shift key). Furthermore, any capital letters were also not recognized in the DOM, again because there are not ID's for them. These issues were fixed by writing an extra for loop, eliminating event.key matches for any Shift keys and using the toLowerCase method to make any uppercase letters lowercase before accessing the DOM.
* When scrolling down, the header would disappear behind the textbox. To fix this, the textbox was given a z-index of -1. This however, broke the buttons, since they now weren't clickable anymore. I took a while to find the issue, but eventually it was fixed by removing the z-index from the text box and instead give the header a z-index of 1.

### Deployment

The site was deployed through Github Pages. Connected to Github was Gitpod, which features a browser based VScode. For the most part I used the connection to Gitpod with a desktop VScode, since I have VIM and other extensions installed, which didn't work in the browser based version.

To the deploy the project, I had to:

* Go to settings in github
* Scroll down to Pages
* Select the main branch
* Hit save to deploy the website

To test the website locally while building:

* Open terminal in the open VScode project
* Start http server by typing 'python3 -m http.server' into the terminal window
* Click the 'Open Browser' button that appears

## Acknowledgements

This website was built as part of the Full Stack Software Development course from Code Institute. I would like to thank my mentor Adeye Adegbenga, for his excellent feedback and guidance throughout the development of the project. I would also like to thank friends and family, who all took a look at the finished project to make sure it worked well and if I could improve things. Lastly, a special thanks to Riyadh Khan, who gave me excellent feedback in the peer-code-review channel on slack.
