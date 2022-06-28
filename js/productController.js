class ProductController {
    constructor(currentId=0){
        this.products = [];
        this.currentId = currentId;
    };

    addItem(name, description, imageURL, createdAt=Date()){
        const product = {
            id: this.currentId++,
            name: name,
            description: description,
            imageURL: imageURL,
            createdAt: createdAt
        };
        this.products.push(product);
        localStorage.setItem('products', JSON.stringify(this.products));

    };
    
    loadItemsFromLocalStorage = () => {
        let storageProducts = localStorage.getItem('products')
        if (storageProducts) {
            console.log(this.products)
            storageProducts = JSON.parse(storageProducts);
            // this.products.push(JSON.parse(storageProducts));
            storageProducts.forEach(product => this.products.push(product));
        };
    };
};



export {ProductController};
