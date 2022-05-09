/**
 * Listens for keys after user selects code or text option.
 * Calls appropriate functions for program to run.
 */
function listenForKeys() {
    document.addEventListener("keydown", function(event) {
        if (event.key === event.key ) {
            if (event.key === "Shift") {
                // do nothing
            } else if (symbols.includes(event.key)) {
                typedLetters.push(event.key);
                compareText();
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
})
codeOption.addEventListener("click", function() {
    typeText(code)
    inputField.focus()
    listenForKeys()
})
textOptionMobile.addEventListener("click", function() {
    inputField.focus()
    typeText(text)
    listenForKeys()
})
codeOptionMobile.addEventListener("click", function() {
    inputField.focus()
    typeText(code)
    listenForKeys()
})




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