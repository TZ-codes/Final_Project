// New instance of productController 
const productController1 = new ProductController(0);

// add product card
const addProductCard = product => {
    const productHTML = '<div class="col">\n' +
        ' <div class="card border-danger mb-3">\n' +
        ' <img src="..." class="card-img-top" alt="...">\n' +
        ' <div class="card-body">\n' +
        ' <h5 class="card-title"></h5>\n' +
        ' <p class="card-text"></p>\n' +
        ' </div>\n'
        ' </div>\n'
        ' </div>\n'
    const productsContainer = document.getElementById("list-items");
    productsContainer.innerHTML += productHTML; 
};

// connect ProductController class and products.js with local storage
const loadStorageSampleData = () => {
    if(!localStorage.getItem("products")){
        const sampleProducts = [{'name':'creatine',
            'img':'',
            'description':'Creatine, get your pump on!'},
            {'name':'protein',
            'img':'',
            'description':'Protein, get your growth on!'}];
            localStorage.setItem("products", JSON.stringify(sampleProducts));
    };
};

const loadCardsListFromProductController = () => {
    for(let i = 0, size = productController1.products.length; i < size ; i++){
        const product = productController1.products[i];
        addProductCard(product);
    }
}

loadStorageSampleData();
productController1.loadProductsFromLocalStorage();
loadCardsListFromProductController();

