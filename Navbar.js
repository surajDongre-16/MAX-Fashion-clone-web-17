var Navbar=document.querySelector("#NAVBAR");

Navbar.innerHTML=`<div id="Upper_nav">

<div>
    <div>
        <i class="fa-solid fa-truck"></i>
        <h4 Style="margin-top:0px; margin-bottom:0px">Free shipping</h4>
    </div>

    <div>
        <i class="fa-solid fa-shop"></i>
        <h4 Style="margin-top:0px; margin-bottom:0px">Return to Store</h4>
    </div>

    <div>
        <i class="fa-solid fa-shop"></i>
        <h4 Style="margin-top:10px; margin-bottom:10px">Click & collect</h4>
    </div>
</div>


<div>
    <div>
        <h6>Download Our Apps</h6>
    </div>

    <div style="height:auto; border-left: 1px solid rgb(99, 97, 94); border-right: 1px solid rgb(99, 97, 94)">
        <h6 style="margin:2px 20px;">Store Locator</h6>
    </div>

    <div>
        <h6>Help</h6>
    </div>
</div>

</div>


<div id="Mid_nav">

<div>
    <img src="../logo.png" alt="">
</div>

<div class="mid_li">
    <ul>
        <li><a href="#" style="color:#303ab2;font-weight: 600;">Women</a>
            <div class="Sub_menu_1">
                <ul>
                    <li><a href="../Womens Section/tees.html">Tops</a></li>
                    <li><a href="../Womens Section/bottom.html">Bottoms</a></li>
                    <li><a href="../Womens Section/dresses.html">Dresses & Jumpsuits</a></li>
                    <li><a href="../Womens Section/sleepwear.html">Sleepwear</a></li>
                    <li><a href="../Womens Section/ethinic.html">Indian Wear</a></li>
                    <li><a href="../Womens Section/active.html">Sportswear</a></li>
                    <li><a href="../Womens Section/lingeri.html">Lingerie</a></li>
                    <li><a href="../Womens Section/fusion.html">Accessories</a></li>
                    <li><a href="../Womens Section/kurta.html">Footwear</a></li>
                    <li><a href="../Womens Section/winter.html">Winterwear</a></li>
                    <li><a href="../Womens Section/addon.html">More</a></li>
                </ul>
            </div>
        </li>


        <li><a href="./mens.html">Mens</a>
            <div class="Sub_menu_2" style="display:block; position:absolute; margin-top: 10px; margin-left: -13.1%;">
                <ul>
                    <li><a href="#">Tops</a></li>
                    <li><a href="#">Bottoms</a></li>
                    <li><a href="#">Sportswear</a></li>
                    <li><a href="#">Loungewear</a></li>
                    <li><a href="#">innerwear</a></li>
                    <li><a href="#">Indian Wear</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Footwear</a></li>
                    <li><a href="#">Winterwear</a></li>
                    <li><a href="#">Sports Leisure</a></li>
                    <li><a href="#">The Shirt Shop</a></li>
                    <li><a href="#">More</a></li>
                </ul>
            </div>
        </li>


        <li><a href="./Girls.html">Girls</a>
            <div class="Sub_menu_3">
                <ul>
                    <li><a href="#">Baby Girl (0-2 Yrs)</a></li>
                    <li><a href="#">Tops</a></li>
                    <li><a href="#">Bottoms</a></li>
                    <li><a href="#">Essentials</a></li>
                    <li><a href="#">Indian Wear</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Footwear</a></li>
                    <li><a href="#">Winterwear</a></li>
                    <li><a href="#">More</a></li>
                </ul>
            </div>
        </li>


        <li><a href="./boys.html">Boys</a>
            <div class="Sub_menu_4">
                <ul>
                    <li><a href="#">Baby Boy (0-2 Yrs)</a></li>
                    <li><a href="#">Tops</a></li>
                    <li><a href="#">Bottoms</a></li>
                    <li><a href="#">Essentials</a></li>
                    <li><a href="#">Indian Wear</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Footwear</a></li>
                    <li><a href="#">Winterwear</a></li>
                    <li><a href="#">More</a></li>
                </ul>
            </div>
        </li>
    </ul>
</div>
<div id="Search_bar">
        <div id="Search_img" onclick="Searching_Input()"><i class="fa-solid fa-magnifying-glass"></i></div>
        <input type="text" id="Search" oninput="Searching_Input(event)" placeholder="What are you looking for?">
</div>

<div id="Sign-up">
    <div><p style="margin:14px 16px;">Sign Up - Sign In</p></div>
    <div></div>
    <div id="#BASKET" onclick="Go_To_Basket()" style="display:flex; align-items: center;"><p style="margin:14px 18px">Basket</p><i class="fa-solid fa-bag-shopping" style="font-size: 25px; margin-bottom:6px;"></i></div>
</div>

</div>


</div>`;

function Go_To_Basket(){
    window.location.href="../basket.html"
}

var bag="";

function Searching_Input(){
    

    if(event.data==undefined){
        Searching_Function(bag);
    }

    else{
        bag+=event.data;
    }

    function Searching_Function(bag){

        // console.log("hello");
        bag=bag.toUpperCase();

        var Searched_Data=[];
        // var data=[[{name:"hello kaka chalo kakan"},{name:"dada chacha"}],[{name:"kaka shaka"},{name:"nana fufa"}]];


        for(var i=0;i<data.length;i++){
            for(var j=0;j<data[i].length;j++){

                // var subData=data[i].name.split(" ");
                // console.log(data[i][j]);
                var upper_case=data[i][j].name.toUpperCase();
                // console.log(upper_case);

                var subData=upper_case.split(" ");
                // console.log(subData);

                if(subData.indexOf(bag)!=-1){
                    // console.log("hello");
                    Searched_Data.push(data[i][j]);
                    // console.log(Searched_Data);    
                }

            }
        }

        // console.log(Searched_Data);

        localStorage.setItem("Searched_Data",JSON.stringify(Searched_Data));

    }
     
}




