


class ProductController {
    constructor (currentId = 0) {
        this.products = [];
        this.currentId = currentId;
    }
    addProduct(name, description, img, createdAt=Date()) {
        const product = {
            id: this.currentId++,
            name: name,
            description: description,
            img: img,
            createdAt: createdAt
        };
        this.products.push(product);

        localStorage.setProduct("products", JSON.stringify(this.products));
    }
    loadProductsFromLocalStorage() {
        const storageProducts = localStorage.getProduct("products")
        if (storageProducts) {
            const products = JSON.parse(storageProducts)
            for (let i = 0, size = products.length; i < size; i++) {
                const products = products[i];
                this.products.push(product);           
            }
        }
    }
}
