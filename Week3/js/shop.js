/**
 * Created by yyuueexxiinngg on 2017/4/4.
 */
var customerName = "Andew";
var price = 10;
var quantity = 2;
var totalPrice = price * quantity;

var customerElement = document.getElementById("customer-name");
customerElement.textContent = customerName;

var priceElement = document.getElementById("price")
priceElement.textContent = "$"+totalPrice;