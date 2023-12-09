
const cart = [];

function addToCart(productTitle) {
    const existingItem = cart.find((item) => item.title === productTitle);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ title: productTitle, quantity: 1 });
    }

    displayCart();
}

function displayCart() {
    const cartElement = document.getElementById("cart");
    cartElement.innerHTML = "";

    cart.forEach((item) => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("cart-item");
        cartItemElement.innerHTML = `
    <p>${item.title}</p>
    <p>Quantity: ${item.quantity}</p>
    `;
        cartElement.appendChild(cartItemElement);
    });

    const cartCountElement = document.getElementById("cart-count");
    cartCountElement.textContent = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );
}


// #######################################################################################
// function changeUsername() {
//   var newName = document.getElementById("nameInput").value;
//   document.getElementById("username").innerText = newName;
// }

// تابع نمایش آلرت با درخواست نام از کاربر
function askForName() {
    var userName = prompt("Please enter your name:");
    // اگر کاربر نام وارد کرده باشد
    if (userName) {
        // تغییر مقدار یوزرنیم در هدر
        document.getElementById("username").innerText = userName;
        document.getElementById("username").style.color = "orange";
        document.getElementById("username").style.fontSize = "24px";
    } else {
        // اگر کاربر لغو کرده باشد
        alert("You didn't enter a name. Default username will be used.");
    }
}

// اجرای تابع askForName هنگام بارگذاری صفحه
window.onload = askForName;

// #######################################################################################
