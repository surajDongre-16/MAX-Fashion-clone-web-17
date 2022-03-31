var basket = JSON.parse(localStorage.getItem("toBasket")) || [];

function displayData(Data){

    Data.map(function(ele){
        var box=document.createElement("div");
        box.style.margin="16px 0px"
    
        var img=document.createElement("img");
        img.src=ele.img_1;
        img.style.width="100%";
        img.style.aspectRatio="1/1.2"
    
        var price_box=document.createElement("div");
        price_box.setAttribute("class","price_box");
    
        var price=document.createElement("h3");
        var rupee_sign=document.createElement("span");
        rupee_sign.innerHTML=`<i class='fa-solid fa-indian-rupee-sign'></i> `;
        rupee_sign.style.fontSize="12px"
        price.append(rupee_sign,ele.price);
        price.style.margin="8px 0px";
    
    
        var like=document.createElement("div");
        like.setAttribute("class","like");
        
        var like_img=document.createElement("img");
        like_img.src="https://cdn-icons.flaticon.com/png/128/2901/premium/2901197.png?token=exp=1648635778~hmac=06c456c3dc80772809d7c530a0e931d2";
        
        like.append(like_img);
    
    
        price_box.append(price,like);
    
    
        var name=document.createElement("p");
        name.innerText=ele.name;
        name.style.fontSize="14px";
        name.style.marginTop="-10%";
        name.style.lineHeight="20px"

        var basket = document.createElement("button");
        basket.innerText = "Add to Basket";
        basket.addEventListener("click", function(){
            addToBasket(ele);
        });
    
        box.append(img,price_box,name,basket);
    
        document.querySelector("#product_list").append(box);
    })


};


//Basket Function   
function addToBasket(ele){
    basket.push(ele);
    localStorage.setItem("toBasket",JSON.stringify(basket));
    console.log(basket);
}



