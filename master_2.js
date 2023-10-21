document.getElementById("body_color").className = "bodyColor";
document.getElementById("content_body").className = "d-flex flex-column align-items-center";
document.getElementById("heaDing").className = "p-5";
document.getElementById("butTon").className = "d-flex flex-column justify-content-center align-items-center gap-3 p-3 but";
var redLight = document.getElementById("redLight"), orangeLight = document.getElementById("orangeLight"), greenLight = document.getElementById("greenLight");
redLight.className = "ton p-2";
orangeLight.className = "ton p-2";
greenLight.className = "ton p-2";
document.getElementById("lights").className = "d-flex flex-column justify-content-center align-items-center gap-3 p-3 lightBody";
var start = document.getElementById("start"), ready = document.getElementById("ready"), go = document.getElementById("go");
start.className = "p-2 redBody";
ready.className = "p-2 redBody";
go.className = "p-2 redBody";
function onRed() {
    start.classNmae = "p-2 redBody";
    redLight.style = "background-color:red";
    orangeLight.style = "background-color:#393e51";
    greenLight.style = "background-color:#393e51";
    ready.style = "background-color:#393e51";
    go.style = "background-color:#393e51";
    start.style = "background-color:red";
}
function onOrange() {
    ready.classNmae = "p-2 redBody";
    redLight.style = "background-color:#393e51";
    orangeLight.style = "background-color:orange";
    greenLight.style = "background-color:#393e51";
    start.style = "background-color:#393e51";
    go.style = "background-color:#393e51";
    ready.style = "background-color:orange";
}
function onGreen() {
    go.classNmae = "p-2 redBody";
    redLight.style = "background-color:#393e51";
    orangeLight.style = "background-color:#393e51";
    greenLight.style = "background-color:green";
    start.style = "background-color:#393e51";
    ready.style = "background-color:#393e51";
    go.style = "background-color:green";
}