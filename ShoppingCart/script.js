const products = [
  { id: 1, name: "Headphones", price: 1999 },
  { id: 2, name: "Keyboard", price: 1499 },
  { id: 3, name: "Mouse", price: 799 },
  { id: 4, name: "USB Cable", price: 299 }
];

const productDiv = document.getElementById("products");
const cartItems = document.getElementById("cartItems");
const totalSpan = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Render products
function renderProducts() {
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productDiv.appendChild(div);
  });
}

// Add to cart
function addToCart(id) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty++;
  } else {
    const product = products.find(p => p.id === id);
    cart.push({ ...product, qty: 1 });
  }
  updateCart();
}

// Update cart UI
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} (₹${item.price}) 
      <div>
        <button onclick="changeQty(${index}, -1)">−</button>
        ${item.qty}
        <button onclick="changeQty(${index}, 1)">+</button>
        <button onclick="removeItem(${index})">❌</button>
      </div>
    `;
    cartItems.appendChild(li);
  });

  totalSpan.innerText = total;
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Quantity change
function changeQty(index, change) {
  cart[index].qty += change;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  updateCart();
}

// Remove item
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// Init
renderProducts();
updateCart();
