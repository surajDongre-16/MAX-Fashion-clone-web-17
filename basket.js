var cart = JSON.parse(localStorage.getItem("tocart")) || []
// window.location.reload()
var total=cart.reduce(function (sum,el){
    return Number(sum+el.price)
},0)
console.log(total)
var length=cart.length
document.querySelector("#itemsInCart").innerText=`Your Shopping Basket (${length} items)`
document.querySelector(".subtotal").innerText=`${total}`
document.querySelector(".sub-total").innerText=`${total}`

cart.map(function (el, index){
    // console.log(el.img_1)
    var tr=document.createElement("tr")
    var td1=document.createElement("img")
    td1.src=el.img_1
    var td2=document.createElement("td")
    td2.innerText=el.name
    var td3=document.createElement("td")
    td3.innerText=el.price
    var btn=document.createElement("button")
    btn.setAttribute("class","remove")
    btn.innerText="remove"
    btn.addEventListener("click",function(){
        removeFunction(el,index)
    })

    tr.append(td1,td2,td3,btn)

    document.querySelector("tbody").append(tr)
})

function removeFunction(el,index){
    cart.splice(index,1)
    localStorage.setItem("tocart",JSON.stringify(cart))
    window.location.reload()
}

document.querySelector(".checkout").addEventListener("click", clikfun)

function clikfun(){
    window.location.href="Checkout.html"
}
