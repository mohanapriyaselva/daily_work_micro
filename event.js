document.getElementById("content_center").className = "d-flex justify-content-center align-items-center";
function select_event() {
    var num_1 = document.getElementById("num").value;
    var opt;
    for (var i = 1; i <= num_1; i++) {
        opt += `<option> ${i} </option>`;
    }
    document.getElementById("print").innerHTML = opt;
}
function box() {
    var num_1 = document.getElementById("print").value;
    document.getElementById("box_1").rows = 10;
    document.getElementById("box_1").columns = 50;
    var drop = "\t ";
    for (var i = 1; i <= num_1; i++) {
        drop += `${i}
         `;
    }
    document.getElementById("box_1").innerHTML = drop;
}


