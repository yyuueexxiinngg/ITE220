/**
 * Created by yyuueexxiinngg on 2017/4/4.
 */
var customerName = "Andew";
var price = 10;
var quantity = 2;
var totalPrice = 0;
var products = [
    "Brooklyn T-Shirt White",
    "Brooklyn T-Shirt Black",
    "Apple Watch",
    "Android Phone"
];
var prices = [10,10,199,159];
var discount = 0.25;


var productsText = "";
var productsElement = document.getElementById("product-list");
for (var i = 0;i<=products.length-1;i++){
    productsText += "<li class='list-group-item'><span class='badge'>"+"$"+prices[i]+"</span>"+products[i]+"</li>";
}
// productsText += "<li class='list-group-item'><span class='badge'>"+prices[0]+"</span>"+products[0]+"</li>";
productsElement.innerHTML = productsText;

for (var i = 0;i<=products.length-1;i++){
    totalPrice += prices[i];
}

if(discount>0) { //If you don't want give discount, then set the value of discount to 0
    var discountText = discount * 100 + "%off";
    var discountElement = document.getElementById("discount");
    discountElement.textContent = discountText;
    totalPrice -= totalPrice * discount;
}


var priceElement = document.getElementById("price");
priceElement.textContent = "$"+totalPrice;

var customerElement = document.getElementById("customer-name");
customerElement.textContent = customerName;

var greetingText = "";
var greetingElement = document.getElementById("greeting");
var time =new Date().getHours();
if(time>=5&&time < 12){
    greetingText = "Good morning";
}else if(time>=12&&time < 17){
    greetingText = "Good afternoon";
}else{
    greetingText = "Good evening";
};

greetingElement.textContent = greetingText;
