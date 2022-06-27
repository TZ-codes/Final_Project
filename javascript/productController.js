class ProductsController {
    constructor(currentId=0) {
        this.items = [];
        this.currentId = currentId;
    };

    addItem(name, description,imageUrl, createdDate=Date()) {
        const item = {
            id: this.currentId++,
            name: name,
            description: description,
            imageUrl: imageUrl,
            createdDate: createdDate
        };
        console.log(item);
        this.items.push(item);
    };
};

const products = new ProductsController()

products.addItem('4kg kettlebell', '4kg kettlebell', '../images/gymEquipment/4kg-Kettlebell.png', '06/26/2022');
products.addItem('8kg-kettlebell', '8kg-kettlebell', '../images/gymEquipment/8kg-Kettlebell.png', '06/26/2022');
products.addItem('12kg-kettlebell', '12kg-kettlebell', '../images/gymEquipment/12kg-Kettlebell.png', '06/26/2022');
products.addItem('24kg-kettlebell', '24kg-kettlebell', '../images/gymEquipment/24kg-Kettlebell.png', '06/26/2022');
products.addItem('32kg-kettlebell', '32kg-kettlebell', '../images/gymEquipment/32kg-Kettlebell.png', '06/26/2022');
products.addItem('40kg-kettlebell', '40kg-kettlebell', '../images/gymEquipment/40kg-Kettlebell.png', '06/26/2022');








