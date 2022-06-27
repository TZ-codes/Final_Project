// class productController {
//     constructor(items) {
//         this.items = [];
//     }
// };

// const item1 = new productController(this.items);

// console.log(item1);

class productController {
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    addItem(name, description, image){
        const item = {
            id: this.currentId++,
            name: name,
            description: description,
            image: image,
        };
    }
}
