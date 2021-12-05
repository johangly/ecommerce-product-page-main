// ! Variables
var sumar = document.getElementById('sumar');
const openNavBtn = document.getElementById('open-nav-btn');
const closeNavBtn = document.getElementById('close-sidenav');
const darkBackground = document.getElementById('dark-background');
const sidenav = document.getElementById('sidenav');
const modal = document.getElementById('modal-container');
const productImg1 = document.getElementById('product-img-1');
const closeModalButton = document.getElementById('close-modal-img');
var restar = document.getElementById('restar');
var cantidad = document.getElementById('cantidad');
const cartButton = document.getElementById('cart');
const titleCard = document.getElementById('titleCard');
const nothing = 10;
const body = document.getElementById('body');
var inicio = 1;
const counter = 0;
const cart = document.getElementById('cart-menu');
const lista = document.getElementById('lista');
const empty = document.getElementById('empty-msg');
const cartIcon = document.getElementById('cart-icon');


// ? Sidenav

openNavBtn.addEventListener('click', () => {
    sidenav.classList.add('show');
    body.classList.add('overflowhidden');

    darkBackground.classList.add('show');
});
closeNavBtn.addEventListener('click', () => {
    sidenav.classList.remove('show');
    darkBackground.classList.remove('show');
    body.classList.remove('overflowhidden');


});
darkBackground.addEventListener('click', () => {
    darkBackground.classList.remove('show');
    sidenav.classList.remove('show');
});

//? Add to cart

//* Amount
restar.addEventListener('click', disminuir);
sumar.addEventListener('click', aumentar);

var cantidad = document.getElementById('cantidad').value = counter;

function aumentar() {
    var cantidad = document.getElementById('cantidad').value = inicio++;
}

function disminuir() {
    var cantidad = document.getElementById('cantidad').value = --inicio;
    if (Math.sign(cantidad) === -1) {
        var cantidad = document.getElementById('cantidad').value = ++inicio;
    }
}
// * delete buy

const deleteBuy = document.getElementById('delete-buy');

function deleteElement() {
    const checkout = document.getElementById('checkoutButton');
    const empty = document.getElementById('empty-msg');
    const lista = document.getElementById('lista');
    empty.classList.remove('display-none');
    lista.innerHTML = "";
    checkoutButton.classList.add('display-none');
    cartIcon.classList.add('display-none');
}
const exceptions = [
    document.getElementById('cart')
]

cartButton.addEventListener('click', function(e) {
    cart.classList.toggle('showcart');

});

cart.addEventListener('outclick', e => {
    cart.classList.remove('showcart');
}, exceptions);

//* Add Buy

function agregarAlCarrito() {
    const empty = document.getElementById('empty-msg');
    const value = document.getElementById('cantidad').value;
    const multiplo = value;
    if (multiplo <= 0) {
        alert("Eliga una cantidad de productos a comprar que sea valida");
    } else {
        const precio = 125.00;
        const calculo = `$${precio * multiplo}.00`;
        const productItem =
            `<li class="product-for-buy">
    <img class="product-img" src="images/image-product-1-thumbnail.jpg" alt="">
    <div>
        <p class="buy-title">Fall Limited Edition Sneakers</p>
        <div>
            <p class="price">$125.00</p>
            <p class="x">x</p>
            <p class="multiplo" id="multiplo">${multiplo}</p>
            <p class="resultado" id="resultado">${calculo}</p>
        </div>
    </div>
    <button class="delete-button" id="delete-buy" onclick="deleteElement()"><img src="images/icon-delete.svg" alt=""></button>
    </li>`;
        const checkout = document.getElementById('checkoutButton');
        const lista = document.getElementById('lista');
        empty.classList.add('display-none');
        lista.innerHTML = productItem;
        checkoutButton.classList.remove('display-none');
        const cartIcon = document.getElementById('cart-icon');
        cartIcon.classList.remove('display-none');
        cartIcon.innerText = multiplo;
    }
}

//? Modal

closeModalButton.addEventListener('click', () => {
    modal.classList.remove('show');
    body.classList.remove('overflowhidden');
});


productImg1.addEventListener('click', () => {
    modal.classList.toggle('show');
    body.classList.toggle('overflowhidden');

});


// body.addEventListener('click', e => {
// document.body.addEventListener("click", function(e) {
//     const target = e.target || e.srcElement;


//     if (target !== cart && !isChildOf(target, cart) || target.id !== 'cart') {
//         cart.classList.remove('showcart');
//     }
// }, false);

// function isChildOf(child, parent) {
//     if (child.parentNode === parent) {
//         return true;
//     } else if (child.parentNode === null) {
//         return false;
//     } else {
//         return isChildOf(child.parentNode, parent);
//     }
// }
//     console.log(e.target.id);
//     if (e.target.id === 'titleCard' || e.target.id === 'empty-msg' || e.target.id === 'cart' || e.target.id === 'title') {
//         nothing++
//     } else {
//         cart.classList.remove('showcart');
//         body.removeEventListener('click');
//     };

// });
