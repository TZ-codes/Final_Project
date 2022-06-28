import {ProductController} from "./productController.js";

const productController = new ProductController();
console.log(productController)

const newProductForm = document.querySelector('#new-product-form');

console.log(newProductForm)
newProductForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newProductName = document.querySelector('#new-product-name');
    const newProductDescription = document.querySelector('#new-product-description');
    const newProductImage = document.querySelector('#new-product-image');


    const name = newProductName.value;
    const description = newProductDescription.value;
    const newURL = './images/gymEquipment/4kg-Kettlebell.png'//newProductImage.value;
    console.log(name);
    productController.addItem(name, description, newURL);
    // localStorage.setItem('products', JSON.stringify(productController.products));
    //
    newProductName.value = '';
    newProductDescription.value = '';

});