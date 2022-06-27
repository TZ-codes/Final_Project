// Create a ItemsController class
class productsController {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    // Create the addItem method
    addItem(name, description,imageUrl) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            imageUrl: imageUrl
        };

        // Push the item to the items property
        this.items.push(item);
    }
}

const item1 = new productsController(this.items)

console.log(item1);

// const equpiment1 = {
//     id: 1,
//     name:
//     description:
//     img: 
//     createdAt: 
// };

// const equipment2 = {
//     id: 2,
//     name:
//     description: 
//     img:
//     createdAt: 





