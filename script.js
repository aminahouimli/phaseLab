if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
var removecartButtons = document.getElementsByClassName("btn")
    console.log(removecartButtons)
    for (var i = 0; i < removecartButtons.length; i++) {
        var button = removecartButtons[i]
        button.addEventListener("click", removecart)
    } 
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    } 
    var addToCartButtons = document.getElementsByClassName('ajouter au panier')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    document.getElementsByClassName('btn')[0].addEventListener('click', purchaseClicked)
}
function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartlunch = document.getElementsByClassName('cart-lunch')[0]
    while (cartlunch.hasChildNodes()) {
        cartlunch.removeChild(cartlunch.firstChild)
    }
    updatecartTotal()
}
function removecart(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updatecartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updatecartTotal()
}

function addtocartClicked(event) {
    var button = event.target
    var cartlunch = button.parentElement.parentElement
    var title = cartlunch.getElementsByClassName('cart-title')[0].innerText
    var price = cartlunch.getElementsByClassName('cart-price')[0].innerText
    var imageSrc = cartlunch.getElementsByClassName('cart-lunch-image')[0].src
    addTocart(title, price, imageSrc)
    updateCartTotal()
}
function addlunchToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartlunch = document.getElementsByClassName('cart-lunch')[0]
    var cartlunchNames = cartlunch.getElementsByClassName('cart-lunch-title')
    for (var i = 0; i < cartlunchNames.length; i++) {
        if (cartlunchNames[i].innerText == title) {
            alert('This lunch is already added to the cart')
            return
        }
    }
    var cartRowContents = `
    <div class="cart-lunch-cart-column">
        <img class="cart-image" src="${imageSrc}" width="100" height="100">
        <span class="cart-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn" type="button">REMOVE</button>
    </div>`
cartRow.innerHTML = cartRowContents
cartItems.append(cartRow)
cartRow.getElementsByClassName('btn')[0].addEventListener('click', removeCart)
cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}
function updatecartTotal() {
    var cartlunch = document.getElementsByClassName("cart")[0]
    var cartRows = cartlunch.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var price = cartRow.getElementsByClassName("cat-total-price")[0]
        var quantityElement = cartRow.getElementsByClassName("cart-quantity")[0]
        var priceElement = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        totalprice = total + (price * quantity)
    }
    totalprice = Math.round(total* 100) / 100
    document.getElementsByClassName("cart-total-price")[0].innerText = '$' + total
}
function removecart(event) {
     // Removes an element from the document.
     var btn = document. getElementByname(btn);
     button. parentNode. removeChild(element);
}
