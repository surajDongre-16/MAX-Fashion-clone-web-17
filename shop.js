var cartArr=JSON.parse(localStorage.getItem("cart"))||[];
    var getbag=JSON.parse(localStorage.getItem("toBasket"));
    var images=document.createElement("img");
    images.src=getbag.img_1;
    document.querySelector("#img_js").append(images);
    document.querySelector("#addtobasket>button").addEventListener("click",function(){
      cartArr.push(getbag);
      localStorage.setItem("cart",JSON.stringify(cartArr));
      window.location.href="shop.html";
    })
  

   console.log(cartArr)