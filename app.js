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