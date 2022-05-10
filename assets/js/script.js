let codeOption = document.getElementById("code-option")
let textOption = document.getElementById("text-option")
let textOptionMobile = document.getElementById("text-option-mobile")
let codeOptionMobile = document.getElementById("code-option-mobile")
let inputField = document.getElementById("input-trigger")


// refactor later
textOption.addEventListener("click", function() {
    inputField.focus()
    typeText(text)
    listenForKeys()
    textPicked = true
})
codeOption.addEventListener("click", function() {
    typeText(code)
    inputField.focus()
    listenForKeys()
    changeTimer()
})
textOptionMobile.addEventListener("click", function() {
    inputField.focus()
    typeText(text)
    listenForKeys()
    textPicked = true
})
codeOptionMobile.addEventListener("click", function() {
    inputField.focus()
    typeText(code)
    listenForKeys()
})

/**
 * Listens for keys after user selects code or text option.
 * Calls appropriate functions for program to run.
 */
function listenForKeys() {
    document.addEventListener("keydown", function(event) {
        if (event.key === event.key) {
            if (event.key === event.key && typedLetters < 1) {
                startTime = new Date()
            } if (event.key === "Shift") {
                // do nothing
            } else if (symbols.includes(event.key)) {
                typedLetters.push(event.key);
                compareText();
                if (textPicked) {
                calculateWPM();
                }
            } else if (event.key === "Backspace") {
                typedLetters.pop()
                resetLetter()
            } else {
                document.getElementById((event.key).toLowerCase() + '-key').style.boxShadow = "inset 0px 0px 0px 6px rgb(233 233 233)";
                typedLetters.push(event.key);
                compareText();
            }
        }
    })
    document.addEventListener("keyup", function(event) {
        if (event.key === event.key) {
            if (event.key !== "Shift" && event.key !== " " && event.key !== "Backspace" && !symbols.includes(event.key))
            document.getElementById((event.key).toLowerCase() + '-key').style.boxShadow = "rgb(2 166 255) 0px 0px 8px 0px";
        }
    })
}

let startTime;

/**
 * Compares text typed by user to text that needs to be typed.
 * Letters are colored red or green depending on if the letter
 * was typed correctly or not.
 */
function compareText() {
        if (typedLetters[typedLetters.length - 1] === checkText[typedLetters.length - 1]) {
            let letterCorrect = document.getElementById("text").children[typedLetters.length - 1];
            letterCorrect.className = "right"
            correct += 1
            percentage = calculateAccuracy()
            document.getElementById("accuracy-percentage").innerHTML = percentage + "%"
        } else {
            let letterWrong = document.getElementById("text").children[typedLetters.length - 1];
            letterWrong.className = "wrong";
            errors += 1
            document.getElementById("error-count").innerHTML = errors
            percentage = calculateAccuracy()
            document.getElementById("accuracy-percentage").innerHTML = percentage + "%"
        } 
}

function changeTimer() {
    document.getElementById("wpm").id = "hideText"
    document.getElementById("wpm-count").id = "hideText"
    document.getElementById("time").style.display = "inline-block"
}

// function timer() {
//     let endTime = new Date()
//     let timeDiff = (endTime.getTime() - startTime.getTime()) / 1000;
//     document.getElementById("wpm-count").innerHTML = Math.floor(timeDiff)
// }

/**
 * Calculates the WPM from amount of words 
 * typed and time difference.
 */
function calculateWPM(time) {
    // code taken from: https://bobbyhadz.com/blog/javascript-count-occurrences-of-each-element-in-array
    let count = {};
    for (let element of typedLetters) {
        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    }
    // code inspired from: https://ralzohairi.medium.com/displaying-dynamic-elapsed-time-in-javascript-260fa0e95049
    let endTime = new Date()
    let timeDiff = (endTime.getTime() - startTime.getTime()) / 1000;
    wpm = Math.floor(60 / timeDiff * count[" "]);
    document.getElementById("wpm-count").innerHTML = wpm
}

function calculateAccuracy() {
    accuracy = 100 - (errors / correct) * 100 
    return accuracy.toFixed(1)
}

/**
 * Reverts color of letter back to black after backspace is hit.
 */ 
function resetLetter() {
            let letter = document.getElementById("text").children[typedLetters.length];
            letter.className = "";
}

/**
 * calls deleteButtons function and enters text or code
 * to be typed by user in to paragraph element.
 */
function typeText(textOrCode) {
    oldText = document.getElementById("text");
    deleteButtons(oldText);
    newText = ""
    for (let letter in textOrCode) {
        newText += `<span>${textOrCode[letter]}</span>`;
    }
    oldText.innerHTML = newText;
    checkText = textOrCode
}

/**
 * Deletes buttons and placeholder text from html
 */
function deleteButtons(text) {
    text.innerHTML = "";
    document.getElementById("code-option").style.display = "none";
    document.getElementById("text-option").style.display = "none";
    document.getElementById("code-option-mobile").style.display = "none";
    document.getElementById("text-option-mobile").style.display = "none";
}

let textPicked = false
let correct = 0;
let errors = 0;
let typedLetters = [];
let  symbols = [" ", "<", ">", ":", "?", "'", "[", "]", "(", ")", "{", "}", "!"]
let text = "When typing, it's important to keep looking at the screen, so you spot any errors before they happen! This is where touch typing comes in handy! So try to type all of this text without ever looking down at your keyboard."
let code = `<script>console.log('Hello, World!')</script>`
let checkText = ""

// nocode:
    // `Make spacebar red as well if not hit (probably with background color.)

    // When restart button is hit, text disappears and typedLetters list is reset.

    // Refactor code to use datatypes (makes multiple event listeners unnescasarry)
    // `