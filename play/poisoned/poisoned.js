"use strict";
window.addEventListener("load", function() {
    backdrop("counter");
});

function backdrop(backdrop) { // in which the parameter is just the name, not the filename or path
    const path = `${backdrop}.png`;
    document.getElementById("backdrop").setAttribute("src", path);
}

function message(message) { // in which the parameter is just the name, not the filename or path
    const path = `${message}.png`;
    document.getElementById("message").setAttribute("src", path);
}