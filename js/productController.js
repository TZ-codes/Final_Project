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

        this.save(name, description, imageURL, createdAt);
    };
    
    loadItemsFromLocalStorage = () => {
        const storageProducts = localStorage.getItem('products')
        if (storageProducts) {
            const products = JSON.parse(storageProducts);
            products.forEach(product => this.products.push(product));
        };
    };

    save(name, description, imageUrl, createdAt){
        const data = { name,  description, imageUrl, createdAt};
        fetch('http://localhost:8080/product/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
            'Access-Control-Allow-Credentials' : 'true',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.log('Error:', error);
        });
    };

    update(name, description, imageUrl){
        //TODO implement this method
        const data = { name,  description, imageUrl}
        fetch('http://localhost:8080/product/', {
        method: 'PUT', 
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
            'Access-Control-Allow-Credentials' : 'true',
        }
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.log('Error:', error);
        });
    }

    delete(productId){
        //TODO implement this method
        fetch('http://localhost:8080/product/' + productId, {
        method: 'DELETE', 
    })
}

    findById(productId){
        //TODO implement this method
        fetch('http://localhost:8080/product/' + productId)
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.log('Error:', error);
        }); 
    };

}

export {ProductController};



