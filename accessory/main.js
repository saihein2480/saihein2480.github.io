function calculatePrice() {
    switch ($("#accessory").val()) {
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
    var accessory_name = $('#accessory option:selected').text();
    var accessory_id = $("#accessory").val();
    var amount = $("#amount").val();
    var price = calculatePrice(accessory_id) * amount;


    // Add data to product_list table
    const tbodyRef = $('#data tbody')
    tbodyRef.before(
        `<tr>
        <td>${accessory_id}</td>
        <td>${accessory_name}</td>
        <td>${amount}</td>
        <td>${"$" + price}</td>
        </tr>`)
    updateNetPrice(price);
    calculateVAT();
}
var netPrice = 0
function updateNetPrice(price) {
    var netPriceElement = document.getElementById("netPrice");
    console.log(netPrice,price)
    netPrice += price;
    netPriceElement.innerHTML = netPrice.toFixed(2);
}
function calculateVAT() {
    var totalPriceElement = document.getElementById("totalPrice");
    var vatRate = $("#vat").val();
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
    $("#data").css({
        "background-color":"yellow",
        "border-collapse" : "collapse",
        "width" : "60vw"
    });
});