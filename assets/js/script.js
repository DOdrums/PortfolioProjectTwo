document.addEventListener("keydown", function(event) {
    if (event.key === event.key ) {
        typedLetters.push(event.key);
        console.log(typedLetters);
        compareText();
        document.getElementById(event.key + '-key').style.boxShadow = "inset 0px 0px 0px 6px rgb(233 233 233)";
    }
})

document.addEventListener("keyup", function(event) {
    if (event.key === event.key) {
        document.getElementById(event.key + '-key').style.boxShadow = "rgb(2 166 255) 0px 0px 8px 0px";
    }
})

function printLetter() {
    for (let letter in typedLetters) {
        console.log(typedLetters[letter]);
    }
}


function compareText() {
        if (typedLetters[typedLetters.length - 1] === typeText[typedLetters.length - 1]) {
            console.log("Good Job!");
            text = [document.getElementById("text-box").textContent]
            console.log(text)
        } else {
            console.log("typeText");
        } 
}

typedLetters = [];
typeText = ['Shift', 'T', 'y', 'p', 'e'];

// nocode:
    `list gets appended with each keystroke, after which a function is called to compare said list to list of letters in text that has to be typed

    If backspace is hit, pop last item off of list, so text can be reasessed (option)

    When restart button is hit, text disappears and typedLetters list is reset.
    `