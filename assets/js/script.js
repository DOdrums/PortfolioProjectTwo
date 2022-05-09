document.addEventListener("keydown", function(event) {
    if (event.key === event.key ) {
        if (event.key === "Shift") {
            // do nothing
        } else if (event.key === " ") {
            typedLetters.push(event.key);
            console.log(typedLetters);
            compareText();
        } else if (event.key === "Backspace") {
            typedLetters.pop()
            console.log(typedLetters)
            resetLetter()
        } else {
            document.getElementById((event.key).toLowerCase() + '-key').style.boxShadow = "inset 0px 0px 0px 6px rgb(233 233 233)";
            typedLetters.push(event.key);
            console.log(typedLetters);
            compareText();
        }
    }
})

document.addEventListener("keyup", function(event) {
    if (event.key === event.key) {
        if (event.key !== "Shift" && event.key !== " " && event.key !== "Backspace")
        document.getElementById((event.key).toLowerCase() + '-key').style.boxShadow = "rgb(2 166 255) 0px 0px 8px 0px";
    }
})

let codeOptionMobile = document.getElementById("code-option")
let textOptionMobile = document.getElementById("text-option")
let inputField = document.getElementById("input-trigger")
codeOptionMobile.addEventListener("click", function() {
    inputField.focus()
    typeText(code)
})
textOptionMobile.addEventListener("click", function() {
    inputField.focus()
    typeText(text)
})

function compareText() {
        if (typedLetters[typedLetters.length - 1] === text[typedLetters.length - 1]) {
            console.log("Good Job!");
            
            // text = document.getElementById("text-box").innerText.charAt(typedLetters.length - 1);
            // console.log(text);
            let letterCorrect = document.getElementById("text").children[typedLetters.length - 1];
            letterCorrect.className = "right"  
        } else {
            let letterWrong = document.getElementById("text").children[typedLetters.length - 1];
            letterWrong.className = "wrong";
        } 
}

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
}


/**
 * Deletes buttons and placeholder text from html
 */
function deleteButtons(text) {
    text.innerHTML = "";
    document.getElementById("code-option").style.display = "none";
    document.getElementById("text-option").style.display = "none";
}

typedLetters = [];
text = "When typing, it's important to keep looking at the screen, so you spot any errors before they happen! It's not convenient to have to go back far in your text to fix mistakes. This is where touch typing comes in handy! So try to type all of this text without ever looking down at your keyboard."
code = `<script>
console.log('Hello, World!')
</script>`

// nocode:
    // `Make spacebar red as well if not hit (probably with background color.)

    // When restart button is hit, text disappears and typedLetters list is reset.
    // `