const closeButton = document.querySelector('#closeButton')
const headerSaleContainer = document.querySelector('.header_sale')
const productsContainer = document.querySelector('.products_container')
const navbarContainer = document.querySelector('.navbar_container');

let productsData = []

const fetchProductsdata = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        productsData = await response.json();

        for (let i = 0; i < 8; i++) {
            const product = productsData[i];
            if (product) {
                const productElement = document.createElement('div');
                productElement.setAttribute('class', 'each_product_container')
                productElement.innerHTML =/*html */ `
                    <img src="${product.image}" alt="${product.title}" />
                    <h3>${product.title}</h3>
                    <img style='width:80px; height: 15px' src="./assets/images/stars.png"/>
                    <span>${product.rating.rate}</span>
                    <p>$${product.price}</p>
                `;
                productsContainer.appendChild(productElement);
            }
        }
      } catch (err) {
        console.log(err);
      }
} 
fetchProductsdata();



closeButton.addEventListener('click',()=>{
    document.body.removeChild(headerSaleContainer)
})


