console.log('products.js first line')
const productController = new ProductController();

const addProductCard = product => {
    productHTML = `<div class="card" style="width: 18rem;">
    <img src=${product.imageURL} class="card-img-top" alt="The Image of the Product" />
    <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
    </div>
</div>`;
const productContainer = document.querySelector('#list-products');
productContainer.innerHTML += productHTML;
};

const localStorageSampleData = () => {
    console.log('localStorageSampleData')
    if(!localStorage.getItem('products')){
        const sampleProduct = [{'name':'Loremmmmm',
        'img':'../images/gymEquipment/4kg-Kettlebell.png',
        'description':'Lorem ipsum dolor sit amet'},
        {'name':'Lorem',
        'img':'../images/gymEquipment/10kg-dumbbell.png',
        'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, repellat!'}] 
        console.log(sampleProduct);
        localStorage.setItem("products", JSON.stringify(sampleProduct));
    }
};

const loadsCardsListFromItemsController = () => {
    for(let i = 0; i < productController.products.length; i++) {
        const product = productController.products[i];
        addProductCard(product);
    }
};

localStorageSampleData();

