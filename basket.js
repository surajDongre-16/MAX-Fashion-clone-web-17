var basketItems = JSON.parse(localStorage.getItem("toBasket"));

var subTotal = 0;
basketItems.map(function(e,i){
    var row = document.createElement("tr");
    row.setAttribute("class","item");

    var item = document.createElement("td");
    var image = document.createElement("img");
    image.setAttribute("src",e.img_1)
    image.width = "150px";
    image.height = "150px";
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
    var selectElement = document.createElement("select");
    selectElement.addEventListener("change",function(){
        quantityValue(e);
    });
    var option0 = document.createElement("option");
    option0.innerText = "";
    var option1 = document.createElement("option");
    option1.innerText = "1";
    option1.setAttribute("value","1")
    var option2 = document.createElement("option");
    option2.innerText = "2";
    option2.setAttribute("value","2")
    var option3 = document.createElement("option");
    option3.innerText = "3";
    option3.setAttribute("value","3")
    var option4 = document.createElement("option");
    option4.innerText = "4";
    option4.setAttribute("value","4")
    var option5 = document.createElement("option");
    option5.innerText = "5";
    option5.setAttribute("value","5")
    var option6 = document.createElement("option");
    option6.innerText = "6";
    option6.setAttribute("value","6")
    var option7 = document.createElement("option");
    option7.innerText = "7";
    option7.setAttribute("value","7")
    var option8 = document.createElement("option");
    option8.innerText = "8";
    option8.setAttribute("value","8")
    var option9 = document.createElement("option");
    option9.innerText = "9";
    option9.setAttribute("value","9")
    var option10 = document.createElement("option");
    option10.innerText = "10";
    option10.setAttribute("value","10");
    selectElement.append(option1,option2,option3,option4,option5,option6,option7,option8,option9,option10);
    quantity.append(selectElement);

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

function removeItem(e,i){
    basketItems.splice(i,1);
    localStorage.setItem("toBasket",JSON.stringify(basketItems));
    window.location.reload;
}

function quantityValue(e){
    var quantity = document.querySelector("select").value;
    localStorage.setItem("quantity",quantity);
    console.log(quantity);
}