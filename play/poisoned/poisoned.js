"use strict";
window.addEventListener("load", function() {
    backdrop("counter");
    newScene(true);
});

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function backdrop(backdrop) { // in which the parameter is just the name, not the filename or path
    const path = `${backdrop}.png`;
    document.getElementById("backdrop").setAttribute("src", path);
}

function buttons(one, click1, two = false, click2 = null) {
    const first = document.createElement("button");
    first.innerText = one;
    first.setAttribute("onclick", click1);
    if(two) var second = document.createElement("button");
    if(two) second.innerText = two;
    if(two) second.setAttribute("onclick", click2);
    document.getElementById("buttons").innerHTML = "";
    document.getElementById("buttons").appendChild(first);
    if(two) document.getElementById("buttons").appendChild(second);
}

function message(message) { // in which the parameter is just the name, not the filename or path, and "rm" will remove message
    if (message === "rm") {
        document.getElementById("message").setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=");
        return;
    }
    const path = `${message}.png`;
    document.getElementById("message").setAttribute("src", path);
}

async function newScene(esc = false) {
    backdrop("counter");
    if (!esc) await wait(randomNumber(314,1000));
    message("rm");
    backdrop("welcome");
    const orders = ["a sushi roll", "two rolls of sushi", "three sushi rolls", "a plate of sashimi", "a single sashimi", "some salmon nigiri", "a plate of nigiri", "a slice of avocado", "a bowl of rice", "wooden chopsticks"];
    const min = Math.ceil(0);
    const max = Math.floor(orders.length);
    let item1 = randomNumber(min, max);
    item1 = orders[item1];
    let item2 = randomNumber(min, max);
    item2 = orders[item2];
    buttons(item1, "result()", item2, "result()");
}

async function result() {
    backdrop("counter");
    var result = randomNumber(1, 314);
    if (result % 44 === 0) {
        var result = true;
    } else var result = false;
    hideButtons();
    if (result) {
        message("poisoned");
        life();
    } else {
        message("safe");
    }
    await newScene();
}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * max) + min;
}

function hideButtons() {
    document.getElementById("buttons").innerHTML = "";
}

function life() {
    //idk yet
}