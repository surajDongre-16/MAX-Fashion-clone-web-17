

//Checkout 
var basketItems = JSON.parse(localStorage.getItem("toBasket")) || [];

var subtotal = 0;
basketItems.map(function(e){
    var box = document.createElement("div");
    box.style.display = "flex";
    var image = document.createElement("img");
    image.setAttribute("src", e.img_1 );
    
    var details = document.createElement("div");
    var name = document.createElement("p");
    name.innerText = e.name;
    var price = document.createElement("p");
    price.innerText = `Price : ${e.price}`;
    details.append(name,price);

    box.append(image,details);
    subtotal += Number(e.price);
    document.querySelector("#itemDetails").append(box);
})

var subTot = document.querySelector("p2");
subTot.innerText = subtotal;
var tot = document.querySelector("p4");
tot.innerText = subtotal;

document.querySelector("#button").addEventListener("click",success);

function success(){
    window.location.href = "success.html";
}

