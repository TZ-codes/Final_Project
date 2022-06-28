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
    };
    
    loadItemsFromLocalStorage = () => {
        const storageProducts = localStorage.getItem('products')
        if (storageProducts) {
            this.products.push(JSON.parse(storageProducts));
            console.log(this.products)
        };
    };
};



export {ProductController};
