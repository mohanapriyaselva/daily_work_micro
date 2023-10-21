var hexaDisplay = document.getElementById("hexaDisplay");
hexaDisplay.innerHTML = "Background Color: #ffffff";
hexaDisplay.className = "sizing";
document.getElementById("button1").style = "background:#e0e0e0";
document.getElementById("button2").style = "background:#6fcf97";
document.getElementById("button3").style = "background:#56ccf2";
document.getElementById("button4").style = "background:#bb6bd9";
function btn1() {
    document.getElementById("bodyColor").style = "background:#e0e0e0";
    hexaDisplay.textContent = "Background Color: #e0e0e0";
}
function btn2() {
    document.getElementById("bodyColor").style = "background:#6fcf97";
    hexaDisplay.textContent = "Background Color: #6fcf07";
}
function btn3() {
    document.getElementById("bodyColor").style = "background:#56ccf2";
    hexaDisplay.textContent = "Background Color: #56ccf2";
}
function btn4() {
    document.getElementById("bodyColor").style = "background:#bb6bd9";
    hexaDisplay.textContent = "Background Color: #bb6bd9";
}

