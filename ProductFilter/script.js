const products = [
  { name: "Smartphone", category: "electronics", price: 15000 },
  { name: "Laptop", category: "electronics", price: 55000 },
  { name: "T-Shirt", category: "fashion", price: 799 },
  { name: "Jeans", category: "fashion", price: 1999 },
  { name: "JavaScript Book", category: "books", price: 499 },
  { name: "Notebook", category: "books", price: 199 }
];

const productList = document.getElementById("productList");
const search = document.getElementById("search");
const category = document.getElementById("category");
const price = document.getElementById("price");

function displayProducts(filteredProducts) {
  productList.innerHTML = "";

  if (filteredProducts.length === 0) {
    productList.innerHTML = "<p>No products found</p>";
    return;
  }

  filteredProducts.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p>Price: ₹${p.price}</p>
    `;
    productList.appendChild(div);
  });
}

function filterProducts() {
  let filtered = products.filter(p => {
    const matchSearch = p.name
      .toLowerCase()
      .includes(search.value.toLowerCase());

    const matchCategory =
      category.value === "all" || p.category === category.value;

    let matchPrice = true;
    if (price.value === "low") matchPrice = p.price < 500;
    if (price.value === "mid") matchPrice = p.price >= 500 && p.price <= 2000;
    if (price.value === "high") matchPrice = p.price > 2000;

    return matchSearch && matchCategory && matchPrice;
  });

  displayProducts(filtered);
}

// Event listeners
search.addEventListener("input", filterProducts);
category.addEventListener("change", filterProducts);
price.addEventListener("change", filterProducts);

// Initial load
displayProducts(products);
