const products = [
    {
        name: "scoopy",
        price: 100,
        description: "Merah dan Underbone - eSAF",
        image: "scoopy.jpg"
    },
    {
        name: "PCX",
        price: 150,
        description: "Merah dan 155cc",
        image: "pcx.jpg"
    },
    {
        name: "revo",
        price: 200,
        description: "Merah dan tulang punggung",
        image: "revo.jpg"
    }
];

const productContainer = document.getElementById("product-container");

function displayProducts() {
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement("h2");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = "Harga: $" + product.price;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDescription);

        productContainer.appendChild(productDiv);
    });
}

displayProducts();
