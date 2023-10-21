document.getElementById("bodyColor").className = "body_color";
document.getElementById("total_image").className = "imageSty";
document.getElementById("bodyImage").className = "imageBody";
document.getElementById("pulp").className = "imageSize";
document.getElementById("cat").className = "image_size";
document.getElementById("switchBox").className = "switch";
function off() {
    document.getElementById("pulp").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("off").className = "bg-danger size";
    document.getElementById("on").className = "switchOff ";
}
function on() {
    document.getElementById("pulp").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("cat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("on").className = "bg-success size";
    document.getElementById("off").className = "switchOn";
}