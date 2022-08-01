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
        
        if (localStorage.getItem('products')) {
            const products = JSON.parse(localStorage.getItem('products'));
            products.push(product);
            localStorage.setItem('products', JSON.stringify(products));
        };

        uploadProduct();
    };
    
    loadItemsFromLocalStorage = () => {
        const storageProducts = localStorage.getItem('products')
        if (storageProducts) {
            const products = JSON.parse(storageProducts);
            products.forEach(product => this.products.push(product));
        };
    };

    save({name, description, imageUrl, createdAt}){
        const data = { name,  description, imageUrl, createdAt};

        fetch('http://localhost:8080/product', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    };
};

export {ProductController};



