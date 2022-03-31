var basketItems = JSON.parse(localStorage.getItem("toBasket"));

var N = basketItems.length;
var h1 = document.querySelector("#itemsInCart");
h1.innerText = `Your Shopping Basket (${N} items)`;



var subTotal = 0;
basketItems.map(function(e,i){
    var row = document.createElement("tr");
    row.setAttribute("class","item");

    var item = document.createElement("td");
    var image = document.createElement("img");
    image.setAttribute("src",e.img_1)
    
    item.append(image);
    

    var desc = document.createElement("td");
    var itemName = document.createElement("h4");
    itemName.innerText = e.name;
    var color = document.createElement("p");
    color.innerText = "Color : Multicolor";
    var size = document.createElement("p");
    size.innerText = "-";
    var removebtn = document.createElement("button");
    removebtn.innerText = "remove";
    removebtn.addEventListener("click",function(){
        removeItem(e,i)
    })
    desc.append(itemName,color,size,removebtn);

    var price = document.createElement("td");
    price.innerText = e.price;

    var quantity = document.createElement("td");
    quantity.innerText = "1";
   

    var totalPrice = document.createElement("td");
    totalPrice.innerText = Number(price.innerText) * Number(localStorage.getItem("quantity"));
    
    subTotal += Number(totalPrice.innerText);
    console.log(price.innerText, localStorage.getItem("quantity"));
    row.append(item,desc,price,quantity,totalPrice);
    document.querySelector("tbody").append(row);



})
//Proceed To Checkout
var subTot = document.querySelector("p2");
subTot.innerText = subTotal;
var tot = document.querySelector("p4");
tot.innerText = subTotal;
var button = document.querySelector("#button");
button.addEventListener("click",toPayment);

function removeItem(e,i){
    basketItems.splice(i,1);
    localStorage.setItem("toBasket",JSON.stringify(basketItems));
    window.location.reload;
}

function toPayment(){
    console.log("toPayments page");
}