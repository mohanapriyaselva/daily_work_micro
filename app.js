document.getElementById("wholeTable_1").className = "table table-bordered";
document.getElementById("buttonClick").className = "p-3 bg-success-subtle border border-0 rounded text-success fw-bolder ";
function up() {
    var qty = parseInt(document.getElementById("qty").value);
    var rate = parseInt(document.getElementById("rate").value);
    document.getElementById("amount").value = qty * rate;
}
function update() {
    var nameOfItem = document.getElementById("nameOfItem").value;
    var qty = parseInt(document.getElementById("qty").value);
    var rate = parseInt(document.getElementById("rate").value);
    document.getElementById("add_1").innerHTML = `<tr><td> ${nameOfItem} </td><td> ${qty} </td><td> ${rate} </td><td> ${(rate * qty)} </td></tr>`;
}
function checkSal() {
    var basic = document.getElementById("basic").value;
    var da = document.getElementById("da").value = basic * (5 / 100);
    var hra = document.getElementById("hra").value = basic * (10 / 100);
    var tra = document.getElementById("tra").value = basic * (5 / 100);
    var pf = document.getElementById("pf").value = basic * (5 / 100);
    var net = document.getElementById("net").value = da + hra + tra + pf;
    var gross = document.getElementById("gross").value = net - pf;
}