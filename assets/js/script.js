document.addEventListener("keydown", function(event) {
    if (event.key === "f") {
        document.getElementById("f-key").style.boxShadow = "inset 0px 0px 0px 6px rgb(233 233 233)";
    } 
})

document.addEventListener("keyup", function(event) {
    if (event.key === "f") {
        document.getElementById("f-key").style.boxShadow = "rgb(2 166 255) 0px 0px 8px 0px";
    }
})