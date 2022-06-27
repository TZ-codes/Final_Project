// New instance of productController 
const productController = new ProductController(0);

// select submit element
const newProductForm = document.querySelector('#newProductForm');

// create submit event
newProductForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // //test code
    // let statement = document.createElement('statement');
    // statement.setAttribute('id', 'state');
    // statement.innerHTML = `Oh good, this code is working.`;
    // statement.style.color = 'black';
    // document.body.appendChild(statement);

    // inputs
    const newProductName = document.querySelector('#newProductName');
    const newProductDescription = document.querySelector('#newProductDescription');
    const newProductImage = document.querySelector('#newProductImage');    

    // Get the values of the inputs
    const name = newProductName.value;
    const description = newProductDescription.value;
    const image = newProductImage.value;


      // Add product to ProductController
      productController.addProduct(name, description, image);

      // Clear the form
      newProductName.value = '';
      newProductDescription.value = '';
      newProductImage.value = '';    
  });

  //console.log(productController.products);