const products = [
    {
        id: 1,
        name: 'Nothing Phone 2',
        info:
            `For a world craving more me-time and less screen-time, we bring you
            the Glyph Interface. Assign different light and sound sequences for
            each contact and notification type and be one step ahead of who’s
            getting in touch. Key information, in a flash.
            <br />
            This is Nothing Community. A project in possibility. Come join us
            for an opportunity to be seen and heard. To contribute to Nothing's
            mission. Let's abandon the glorification of I and open up to the
            potential of we. The community is always creating. Always evolving.
        `,
        price: 599.00,
        image: './image/Phone-2-PDP-Header-Desktop.webp',
        categuryID: 3
    },
    {
        id: 2,
        name: 'KingTool 325 Piece',
        info:
            `[Toolbox Included] - Includes 1-Drawer storage box with independent sliding drawer to enlarge the capacity
            more than common toolbox. Assortment of necessary tools are in one tool chest, durable plastic case with
            internal molded compartments to keep each component protected and easily accessible. All tools meet or
            exceed ANSI standard.
            <br />
            This is Nothing Community. A project in possibility. Come join us
            for an opportunity to be seen and heard. To contribute to Nothing's
            mission. Let's abandon the glorification of I and open up to the
            potential of we. The community is always creating. Always evolving.
        `,
        price: 700.00,
        image: './image/711pTh86caS.__AC_SX300_SY300_QL70_ML2_.jpg',
        categuryID: 1
    },
    {
        id: 3,
        name: '12 years a slave',
        info:
            `
            And What Difference is There in the Colour of the Soul?
            A hardworking farmer and an exceptional fiddler, Solomon Northup is born a free man of colour. He lives
            happily with his wife and children in Saratoga County, New York, until the day an employment offer at a
            circus changes his life.. . .
            <br />
            A heart-rending memoir chronicling his fight for survival and freedom, Northup?s Twelve Years A Slave is one
            of the best slave narratives ever written. It was adapted into a historical drama film of the same name in
            2013, which went on to win the Golden Globe Award for Best Motion Picture ? Drama.
        `,
        price: 19.00,
        image: './image/book.jpg',
        categuryID: 2
    },
    {
        id: 4,
        name: 'JDSI Pencil Sharpener',
        info:
            `
            Heavy Duty Pencil Sharpener,With powerful motor and durable helical blade, the large pencil sharpener can
            sharpen over 5000 times. Fit all kinds of 6-12mm #2 pencils, colored pencils and charcoal pencil. It
            sharpens quickly and uniformly in 3-5s.
            <br />
            Auto Stop:Automatically work when plugging the pencil into the pencil socket. Auto-stop working if finished
            or the lid is opened for protecting the safety of the child. It could prevent excessive sharpening.
        `,
        price: 16.00,
        image: './image/elec.jpg',
        categuryID: 4
    },
    {
        id: 5,
        name: 'LEGO',
        info:
            `LEGO Classic Medium Creative Brick Box, Multi-Colour toy block set for boys and girls is a great build and
            play toy for children aged four years and up
            <br />
            Within this toy building block set, you'll find 484 LEGO blocks, including toy windows, toy eyes, toy tires
            complete with wheel rims, a green baseplate, and various other blocks to enhance the fun for your boys and
            girls
        `,
        price: 79.00,
        image: './image/lego.jpg',
        categuryID: 5
    },
    {
        id: 1,
        name: 'Raspberry SC15184 Pi',
        info:
            ` As well as learning in school, young people can have fun getting creative with tech at home to make things that matter to them.

            That’s why part of our educational mission is supporting young people, parents, and educators with free home learning resources.
            
            Read our guide for parents
            
            <br />
            The projects include step-by-step instructions to support coding for kids, teenagers and young adults of all ages and skill levels. Plus they’re available in up to 30 languages and take less than an hour to complete.
        `,
        price: 249.00,
        image: './image/raspberry.jpg',
        categuryID: 4
    },
]

let cart = {
    items: [],
    total: 0,
}

const productContainer = document.getElementById("product-container");

const renderProducts = () => {
    productContainer.innerHTML = ''; // پاک کردن محتوای قبلی

    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add("card", "col-md-3");
        productDiv.dataset.category = product.categuryID;
        productDiv.dataset.name = product.name;
        productDiv.dataset.price = product.price;
        // ساخت کارت هر محصول
        productDiv.innerHTML = `
        <div data-category=${product.categuryID}>
            <div class="image-card">
                <img src="${product.image}" class="card-img-top" alt="..." />
            </div>
            <div class="card-body">
                <h3 class="card-title">${product.name}</h3>
                <br />
                <p class="card-text">${product.info}</p>
                <div class="price">
                    <p>Price ${product.price}$</p>
                    <a onclick="addToCart(${index})" class="btn btn-primary">Add to cart</a>
                </div>
            </div>
        </div>
        `;

        productContainer.appendChild(productDiv);
    });
};

// اجرای تابع برای نمایش اولیه محصولات
renderProducts();

// ############################################################################

// ساخت کارت سبد خرید هر محصول و دکمه حذف محصول

const renderCartItems = () => {
    const cartDiv = document.querySelector('.cart__items')
    cartDiv.innerHTML = ''

    const totalPriceEl = document.querySelector('.cart__total-price')

    let totalPrice = 0

    if (cart.items.length === 0) {
        cartDiv.innerHTML = 'There are no products in the shopping cart.'
    }

    cart.items.forEach((item) => {
        totalPrice += item.total

        cartDiv.innerHTML += `
       <div class="cart__item">

       <div class="col-md-4">
        <h3 class="cart__item-title">${item.name}</h3>
      </div>

      <div class="col-md-4">
        <div class="qty">${item.qty}</div>
      </div>
      
<div class="col-md-4">
        <button class="cart__item-remove" onclick="removeFromCart('${item.name}')"><span class="material-symbols-outlined">
        remove_shopping_cart
        </span></button>
      </div>
     
    </div> 
      `
    })
    //  جمع مبلغ سبد خرید
    totalPriceEl.innerHTML = `Subtotal: <span style="color: red;">${totalPrice} </span>$`

    // شمارنده کنار سبد خرید
    const cartBadge = document.getElementById('cart-count-container');
    cartBadge.innerText = cart.items.reduce((total, item) => total + item.qty, 0).toString();
}

// ############################################################################

// اضافه کردن محصولات به سبد خرید 

const addToCart = (productIndex) => {
    const product = products[productIndex]

    let existingProduct = false

    let newCartItems = cart.items.reduce((state, item) => {
        if (item.name === product.name) {
            existingProduct = true

            const newItem = {
                ...item,
                qty: item.qty + 1,
                total: (item.qty + 1) * item.price,
            }

            return [...state, newItem]
        }

        return [...state, item]
    }, [])

    if (!existingProduct) {
        newCartItems.push({
            ...product,
            qty: 1,
            total: product.price,
        })
    }

    cart = {
        ...cart,
        items: newCartItems,
    }

    renderCartItems()
}

// ############################################################################

// حذف کالای داخل سبد خرید

const removeFromCart = (productName) => {
    let newCartItems = cart.items.reduce((state, item) => {
        if (item.name === productName) {
            const newItem = {
                ...item,
                qty: item.qty - 1,
                total: (item.qty - 1) * item.price,
            }

            if (newItem.qty > 0) {
                return [...state, newItem]
            } else {
                return state
            }
        }

        return [...state, item]
    }, [])

    cart = {
        ...cart,
        items: newCartItems,
    }

    renderCartItems()
}

renderProducts()
renderCartItems()




// #######################################################################################


//  درخواست نام از کاربر

function askForName() {
    let userName;

    while (!userName || userName.trim() === "") {
        userName = prompt("Please enter your name:");

        // اگر کاربر لغو کرده باشد
        if (!userName || userName == " ") {
            alert("You didn't enter a name. Please try again.");
        }
    }

    // تغییر مقدار یوزرنیم در هدر
    document.getElementById("username").innerText = userName;
    document.getElementById("username").style.color = "orange";
    document.getElementById("username").style.fontSize = "24px";

}

// اجرای تابع askForName هنگام بارگذاری صفحه
window.onload = askForName;

// #######################################################################################

// جستجوی محصول بر اساس نام محصول (title)

function filterCards() {
    let searchValue = document.getElementById("search-field").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let title = card.querySelector(".card-title").textContent.toLowerCase();
        if (title.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


// #######################################################################################

// دسته بندی و نمایش محصول


function filterByCategory() {
    let selectedCategory = document.getElementById("dropdown").value;
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let category = card.getAttribute("data-category");

        if (selectedCategory === "" || category === selectedCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


// #######################################################################################

// مشاهده سبد خرید

const row = document.querySelector("#basket-icon");
row.addEventListener("click", () => {
    document.querySelector(".row").style.display = "block";
    document.querySelector(".blure").style.display = "block";
});

// ########################################

// بستن سبد خرید

const closeCard = document.querySelector(".close");
closeCard.addEventListener("click", () => {
    document.querySelector(".row").style.display = "none";
    document.querySelector(".blure").style.display = "none";
});