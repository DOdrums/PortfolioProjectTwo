function getKeys(keys) {
    let letters = []
    for (let key in keys) {
        letters.push(keys[key].innerText)
    }
    return letters
}

keys = document.getElementsByClassName('key')
let letters = getKeys(keys)

console.log(letters)

document.addEventListener("keydown", function(event) {
    if (event.key === event.key ) {
        console.log(event.key)
        document.getElementById(event.key + '-key').style.boxShadow = "inset 0px 0px 0px 6px rgb(233 233 233)";
    }
})

document.addEventListener("keyup", function(event) {
    if (event.key === event.key) {
        document.getElementById(event.key + '-key').style.boxShadow = "rgb(2 166 255) 0px 0px 8px 0px";
    }
})