document.addEventListener("keydown", function(event) {
    if (event.key === event.key ) {
        if (event.key === "Shift") {
            // do nothing
        } else if (event.key === " ") {
            typedLetters.push(event.key);
            console.log(typedLetters);
            compareText();
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
        if (event.key !== "Shift" && event.key !== " ")
        document.getElementById((event.key).toLowerCase() + '-key').style.boxShadow = "rgb(2 166 255) 0px 0px 8px 0px";
    }
})


function compareText() {
        if (typedLetters[typedLetters.length - 1] === typeText[typedLetters.length - 1]) {
            console.log("Good Job!");
            
            text = document.getElementById("text-box").innerText.charAt(typedLetters.length - 1);
            console.log(text);
            newText = `<span class="right">${text}</span>`;
            console.log(newText);
            document.getElementById("text-box").innerHTML.replace(typedLetters[typedLetters.length - 1], "ja")
        } else {
            console.log("typeText");
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