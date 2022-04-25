typedLetters = []

document.addEventListener("keydown", function(event) {
    if (event.key === event.key ) {
        typedLetters.push(event.key)
        document.getElementById(event.key + '-key').style.boxShadow = "inset 0px 0px 0px 6px rgb(233 233 233)";
    }
})

document.addEventListener("keyup", function(event) {
    if (event.key === event.key) {
        document.getElementById(event.key + '-key').style.boxShadow = "rgb(2 166 255) 0px 0px 8px 0px";
    }
})

for (letter in typedLetters) {
    console.log(typedLetters[letter])
}

// document.addEventListener("keyup", function(event) {
//     if (event.key === 'p') {
//         console.log(typedLetters)
//     }
// })