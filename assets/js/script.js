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

function compareText() {
        if (typedLetters[typedLetters.length - 1] === typeText[typedLetters.length - 1]) {
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

typedLetters = [];
typeText = ['T', 'y', 'p', 'e', ' ', 't', 'h', 'i', 's', ' ', 't', 'e', 'x', 't', ' ', 'a', 's', ' ', 'f', 'a', 's', 't', ' ', 'a', 's', ' ', 'y', 'o', 'u', ' ', 'c', 'a', 'n', '.'];

// nocode:
    // `list gets appended with each keystroke, after which a function is called to compare said list to list of letters in text that has to be typed

    // If backspace is hit, pop last item off of list, so text can be reasessed (option)

    // When restart button is hit, text disappears and typedLetters list is reset.
    // `

// Logic first listener:

    // ` If shift do nothing
    // If space or other key, call function
    // If key but not space or shift, call color change

    // `