const totalquantity = document.getElementById("total-quantity");
const totalprice = document.getElementById("total-price");
const productcards = document.getElementsByClassName("product-card");

for (let productcard of productcards) {
  let add = productcard.querySelector(".add");
  let remove = productcard.querySelector(".remove");
  let price = productcard.querySelector(".price");
  add.onclick = () => {
    totalquantity.innerText++;
    totalprice.innerText =
      parseInt(price.innerText) + parseInt(totalprice.innerText);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  remove.onclick = () => {
    totalprice.innerText == 0;
    totalquantity.innerText == 0;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
}


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getDetails() {
        return `${this.name}: £${this.price}`;
    }
}


class CartItem {
    constructor(product, quantity = 1) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }

    getDetails() {
        return `${this.product.name} x${this.quantity} - £${this.getTotalPrice()}`;
    }
}


class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.product.name === product.name);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new CartItem(product, quantity));
        }
    }

    removeItem(productName) {
        this.items = this.items.filter(item => item.product.name !== productName);
    }

    getTotalCost() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    displayCart() {
        if (this.items.length === 0) {
            console.log("The cart is empty.");
        } else {
            this.items.forEach(item => console.log(item.getDetails()));
            console.log(`Total: £${this.getTotalCost()}`);
        }
    }
}


const Alphafly = new Product("Nike-Alphafly", 200);
const Alphaflyzoom = new Product("Nike-Alphaflyzoom", 130);
const Alphaflynext = new Product("Nike-Alphaflynext", 130);


const cart = new ShoppingCart();


cart.addItem(Alphafly, 200);
cart.addItem(Alphaflynext, 130);
cart.addItem(Alphaflyzoom, 130);


cart.displayCart();


cart.removeItem("Alphaflynext");
cart.displayCart();
