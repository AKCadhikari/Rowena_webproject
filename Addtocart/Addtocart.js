const product =[
    {
        id:0,
        image: 'Addtocart/image/01.jpg',
        title: 'Jaguar Classic Black',
        price: 50,
    },
    {
        id: 1,
        image: 'Addtocartfiles/image/hh-2.jpg',
        title: 'Versace Original',
        price: 65,
    },
    {
        id: 2,
        image: 'Addtocartfiles/image/ee-3.jpg',
        title: 'Aqua di GEO',
        price: 80,
    },
    {
        id:3,
        image: 'Addtocartfiles/image/aa-4.jpg',
        title: 'Dunhill London',
        price: 45,
    },
    {
        id:4,
        image: 'Addtocartfiles/image/1-1.png',
        title: 'Dolice and Gabbana',
        price: 30,
    },
    {
        id:5,
        image: 'Addtocartfiles/image/6-1.png',
        title: 'Scandal',
        price: 90
    }
];
const categories=[...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML=categories.map((item)=>
{
    var{image,title,price}=item;
    return(
        `<div class='box'>
            <div class='image-box'>
                <img class='images' src=${image}></img>
             </div> 
          <div class='bottom'>
          <p>${title}<p>   
          <h2>$ ${price}.00</h2>`+
          "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
          `</div>
          </div>` 
    )
}).join('')  

var cart=[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j=0 , total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML="Your cart is empty";
        document.getElementById("total").innerHTML="$"+0+".00";
}
else{
    document.getElementById("cartItem").innerHTML= cart.map((items)=>
        {
          var {image,title,price}=items;
          total=total+price;
          document.getElementById("total").innerHTML="$ "+total+".00";
          return(
            `<div class='cart-item'>
            <div class='row-img'>
                <img class='rowing' src=${image}>
            </div>
            <p style='font-size:size:12px;'>${title}</p>
            <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
            "<i class='fa-solid fa-trash' onclick='delElement("+(j++) +")'></i></div>"
          );
        }).join('');
    }
}