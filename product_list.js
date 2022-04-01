var basket = JSON.parse(localStorage.getItem("toBasket")) || [];

function displayData(Data){
    document.querySelector("#product_list").innerHTML = ""
    Data.map(function(ele, ind,arr){
        var box=document.createElement("div");
        box.setAttribute("class","child_div")
        box.addEventListener("mouseenter",DisplayAddToCartButton);
        box.addEventListener("mouseleave",HideAddToCartButton);
        box.style.margin="-2% 0px"
    
        var img=document.createElement("img");
        img.src=ele.img_1;
        img.style.width="100%";
        img.style.aspectRatio="1/1.2"
    
        var price_box=document.createElement("div");
        price_box.setAttribute("class","price_box");
    
        var price=document.createElement("h3");
        var rupee_sign=document.createElement("span");
        rupee_sign.innerHTML=`<i class='fa-solid fa-indian-rupee-sign'></i> `;
        rupee_sign.style.fontSize="12px";
        rupee_sign.style.opacity=1;
        price.append(rupee_sign,ele.price);
        price.style.margin="8px 0px";
    
    
        var like=document.createElement("div");
        like.setAttribute("class","like");
        
        var like_img=document.createElement("img");
        like_img.src="../like.png";
        
        like.append(like_img);
    
    
        price_box.append(price,like);
    
    
        var name=document.createElement("p");
        name.innerText=ele.name;
        name.style.fontSize="14px";
        name.style.marginTop="-11%";
        name.style.lineHeight="20px"

        var basket = document.createElement("button");
        basket.addEventListener("mouseover",DisplayAddToCartButton);
        basket.setAttribute("id","Basket");
        basket.innerText = "ADD TO BASKET";
        basket.addEventListener("click", function(){
            addToBasket(ele);
        });

        box.append(img,price_box,name,basket);
    
        document.querySelector("#product_list").append(box);
        countFn(arr.length)

    });

};




function DisplayAddToCartButton(){
    event.target.querySelector("#Basket").style.opacity=1;
    event.target.style.cursor="pointer";
    event.target.querySelector("#Basket").style.cursor="pointer";
}


function HideAddToCartButton(){
    event.target.querySelector("#Basket").style.opacity=0;

}




//Basket Function   
function addToBasket(ele){
    // console.log("hello")
    basket.push(ele);
    localStorage.setItem("toBasket",JSON.stringify(basket));
    console.log(basket);
}

// total products count
function countFn(count){
    document.querySelector(".total-product").innerText=`${count} Products`
}

