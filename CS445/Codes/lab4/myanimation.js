"use strict";

window.onload = function () {
    document.getElementById("stop").disabled = true;
    document.getElementById("start").onclick = beginAnimation;
    document.getElementById("fontsize").onchange = reSize;
}

let timer;
let index = 0;
let animModel;
let arrModel;
let delayMs ;

function beginAnimation() {
    const animField = document.getElementById("animation");
    const optionSelected = animField.options[animField.selectedIndex].value;
        
    animModel= ANIMATIONS[optionSelected];
    arrModel = animModel.split("=====\n");
    changeTurbo();

    resize();    
    document.getElementById("start").disabled = ture;
    document.getElementById("stop").disabled = false;
}


function changeTurbo() {
    clearInterval(timer);
    let isTurbo = document.getElementById("turbo").checked;
    if (isTurbo) {
        delayMs = 5;
    } else {
        delayMs = 1000;
    }
    timer = setInterval(repeatAnimation, delayMs);
}


function reSize() {
    const sizeField = document.getElementById("fontsize");
    const sizeSelected = sizeField.options[sizeField.selectedIndex].value;
    document.getElementById("text-area").style.fontSize = sizeSelected;
}

function repeatAnimation() {
    index = index % arrModel.length
    document.getElementById("text-area").value = arrModel[index];
    index++;
}
