import {ProductController} from "./productController.js";

const productController = new ProductController();

const newProductForm = document.querySelector('#new-product-form');

newProductForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newProductName = document.querySelector('#new-product-name');
    const newProductDescription = document.querySelector('#new-product-description');
    const newProductImage = document.querySelector('#new-product-image');

    const name = newProductName.value;
    const description = newProductDescription.value;
    const newURL = newProductImage.value; 
    const createdAt = new Date();

    //`./images/gymEquipment/${imgName}.png`
    // const imgName = 
    //assign an image to imgName!!!

    productController.addItem(name, description, newURL, createdAt);

    newProductName.value = '';
    newProductDescription.value = '';

});