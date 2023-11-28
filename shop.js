// reveal elements when scroll

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show'); //shows element when meant to be visible
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));






// open and close cart list
let iconcart = document.querySelector('.fa-solid.fa-cart-shopping');
let closeCart = document.querySelector('.close')
let body = document.querySelector('body');


iconcart.addEventListener('click',() => {
    body.classList.toggle('showcart')
})

closeCart.addEventListener('click',() => {
    body.classList.toggle('showcart')
})

// Products
const product = [
    {
        id: 1,
        image:"Images/Coldplay-sweatshirt.webp",
        price: 52,
        title: "Holiday Crewneck Sweatshirt"
    },
    
    {
        id: 2,
        title: "Keychain",
        price: 7,
        image:"Images/Keychain.webp"
    },

    {
        id: 3,
        title: "Everyone Is An Alien Somewhere Tee",
        price: 45,
        image:"Images/LightBlueTee.webp"
    },

    {
        id: 4,
        title: "Kuala Lumpur Tee",
        price: 40,
        image:"Images/KLTeeTour.webp"
    },

    {
        id: 5,
        title: "Band Shadow Music Of The Spheres Tee",
        price: 45,
        image:"Images/shadowteeTour.webp"
    },

    {
        id: 6,
        title: "MOTS Art Print",
        price: 30,
        image:"Images/ArtPrintTour.webp"
    }

];

//cart adding, deleting and calculation
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    let {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

let cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            let {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:15px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}