function calculatePrice() {
    switch (document.getElementById("accessory").value) {
        case "CC01":
            return 10;
        case "DC01":
            return 20;
        case "PM03":
            return 30;
        case "TO06":
            return 40;
        case "CV04":
            return 50;
        case "HH07":
            return 60;
        case "CTC05":
            return 70;
        default:
            return 0;
    }
}

function addProductList() {
    // Determine values
    var accessory_element = document.getElementById("accessory");
    var accessory_name = accessory_element.options[accessory_element.selectedIndex].text;
    var accessory_id = document.getElementById("accessory").value;
    var amount = document.getElementById("amount").value;
    var price = calculatePrice(accessory_id) * amount;

    // Add data to product_list table
    var table = document.getElementById("product_list");
    var row = table.insertRow(-1);
    var accessoryIDCell = row.insertCell(0);
    var accessoryNameCell = row.insertCell(1)
    var amountCell = row.insertCell(2);
    var priceCell = row.insertCell(3);

    // Determine data values to table
    accessoryIDCell.innerHTML = accessory_id;
    accessoryNameCell.innerHTML = accessory_name;
    amountCell.innerHTML = amount;
    priceCell.innerHTML = "$" + price;
    updateNetPrice(price);
    calculateVAT();
}
var netPrice = 0
function updateNetPrice(price) {
    var netPriceElement = document.getElementById("netPrice");
    // var totalPrice = parseFloat(totalPriceElement.innerHTML);
    console.log(netPrice,price)
    netPrice += price;
    netPriceElement.innerHTML = netPrice.toFixed(2);
}
function calculateVAT() {
    var totalPriceElement = document.getElementById("totalPrice");
    var vatRate = document.getElementById("vat").value;
    var totalPrice = netPrice * (1 + vatRate / 100);
    totalPriceElement.innerHTML = totalPrice.toFixed(2);
}

$(document).ready(function() {
    $("#add_button").click(function() {
        addProductList();
    });
    $("#total_price").click(function(){
        calculateVAT();
    });
    $("#product_list").css({
        "background-color":"yellow",
        "border-collapse" : "collapse",
        "width" : "60vw"
    });
});