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
};


const productOne = new ProductController();
productOne.addItem('Tyler', 'shoot me in the face please',);
console.log(productOne);
