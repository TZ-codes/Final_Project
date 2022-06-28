const product = {
    id: 1,
    name: 'kettlebell',
    description: 'sample description',
    imageURL: '../images/gymEquipment/4kg-Kettlebell.png',
    createdAt: Date()
};

const addProductCard = product => {
    productHTML = `<div class="card" style="width: 18rem;">
    <img src=${product.imageURL} class="card-img-top" alt="The Image of the Product" />
    <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
    </div>
</div>`;
return productHTML;
};

console.log(addProductCard(product));