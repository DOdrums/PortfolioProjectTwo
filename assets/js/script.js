let codeOption = document.getElementById("code-option")
let textOption = document.getElementById("text-option")
let textOptionMobile = document.getElementById("text-option-mobile")
let codeOptionMobile = document.getElementById("code-option-mobile")
let inputField = document.getElementById("input-trigger")
let refreshBtn = document.getElementById("refresh")
let refreshBtnMobile = document.getElementById("refresh-mobile")


// refactor later
textOption.addEventListener("click", function() {
    inputField.focus()
    typeText(text)
    textPicked = true
    click = true
})
codeOption.addEventListener("click", function() {
    typeText(code)
    inputField.focus()
    click = true
    changeTimer("none", "inline-block")
    codePicked = true
})
textOptionMobile.addEventListener("click", function() {
    inputField.focus()
    typeText(text)
    click = true
    textPicked = true
})
codeOptionMobile.addEventListener("click", function() {
    inputField.focus()
    typeText(code)
    click = true
    changeTimer("none", "inline-block")
    codePicked = true
})
refreshBtn.addEventListener("click", function() {
    refresh("inline-block", "none")
})
refreshBtnMobile.addEventListener("click", function() {
    refresh("none", "block")
})

/**
 * Listens for keys after user selects code or text option.
 * Calls appropriate functions for program to run.
 */
    document.addEventListener("keydown", function(event) {
        if (event.key === event.key && click === true) {
            if (event.key === event.key && typedLetters < 1 && event.key !== "Shift") {
                startTime = new Date();
                if (codePicked) {
                    start();
                }
            } if (event.key === "Shift") {
                // do nothing
            } else if (symbols.includes(event.key)) {
                typedLetters.push(event.key);
                compareText();
                if (textPicked) {
                calculateWPM();
                }
            } else if (event.key === "Backspace") {
                typedLetters.pop();
                resetLetter();
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
            if (typedLetters.length === code.length) {
                pause();
            } 
        } else {
            let letterWrong = document.getElementById("text").children[typedLetters.length - 1];
            letterWrong.className = "wrong";
            errors += 1
            document.getElementById("error-count").innerHTML = errors
            percentage = calculateAccuracy()
            document.getElementById("accuracy-percentage").innerHTML = percentage + "%"
            if (typedLetters.length === code.length) {
                pause();
            } 
        } 
}

function changeTimer(val1, val2) {
    document.getElementById("wpm").style.display = val1
    document.getElementById("wpm-count").style.display = val1
    document.getElementById("time").style.display = val2
}


// all timer code taken from: https://dev.to/walternascimentobarroso/creating-a-timer-with-javascript-8b7
let millisecond = 0;
let second = 0;
let cron;

function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
        document.getElementById("time-count").innerText = second;
    }
}

function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10);
}

function pause() {
    clearInterval(cron);
}

function reset() {
    second = 0;
    millisecond = 0;
    document.getElementById("time-count").innerText = "0";
}

function refresh(displayValue, displayValueMobile) {
    let text = document.getElementById("text")
    let newValue = displayValue
    let newValueMobile = displayValueMobile
    deleteThings(text, newValue, newValueMobile);
    document.getElementById("text").innerHTML = "Select an option: Text or Code?";
    reset();
    pause();
    typedLetters = [];
    if (codePicked) {
        changeTimer("inline-block", "none")
        document.getElementById("accuracy-percentage").innerHTML = ""
        document.getElementById("error-count").innerHTML = 0
    } else {
        document.getElementById("wpm-count").innerHTML = 0;
        document.getElementById("accuracy-percentage").innerHTML = ""
        document.getElementById("error-count").innerHTML = 0
    }
    codePicked = false;
    textPicked = false;
    click = false;
    correct = 0;
    errors = 0;
}

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
    let oldText = document.getElementById("text");
    let displayValue = "none"
    deleteThings(oldText, displayValue);
    let newText = ""
    for (let letter in textOrCode) {
        newText += `<span>${textOrCode[letter]}</span>`;
    }
    oldText.innerHTML = newText;
    checkText = textOrCode
}

/**
 * Deletes buttons and placeholder text from html
 */
function deleteThings(text, displayVal, displayValMobile) {
    text.innerHTML = "";
    document.getElementById("code-option").style.display = displayVal;
    document.getElementById("text-option").style.display = displayVal;
    document.getElementById("code-option-mobile").style.display = displayValMobile;
    document.getElementById("text-option-mobile").style.display = displayValMobile;
}

let click = false
let codePicked = false
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