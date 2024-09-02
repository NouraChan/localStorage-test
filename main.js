var addBtn = document.getElementById('addBtn');
var productName = document.getElementById('productName');
var productId = document.getElementById('productId');
var productDesc = document.getElementById('productDesc');
var productRate = document.getElementById('productRate');
var quantity = document.getElementById('productQuantity');
var productPrice = document.getElementById('productPrice');


printDataInTable();


addBtn.addEventListener('click', function() {
    addProduct();
});

function addProduct() {
    var jsonstr = setData();
    addToLocalStorage(jsonstr);    
    printDataInTable();

}

function setData() {

    var object = {
        id: productId.value,
        productName: productName.value,
        productPrice: productPrice.value,
        productDesc: productDesc.value,
        productRate: productRate.value,
        productQuanity: quantity.value,
        createdAt: new Date().toISOString() // Add creation time
    };

   
console.log(JSON.stringify(object));

    // console.log(object);
    
    return object;
}

function addToLocalStorage(object) {    
  
  var jsonString = JSON.stringify(object);
        localStorage.setItem(object.id, jsonString);
    
}

function printDataInTable() {
  var row = ``;
  var numItems = localStorage.length;

  for (var i = 0; i < numItems; i++) {
    var key = localStorage.key(i);
    var product = JSON.parse(localStorage.getItem(key));
    
    row += `
      <tr><td>${product.id}</td>
      <td>${product.productName}</td> 
      <td>${product.productPrice}</td>
      <td>${product.productDesc}</td>
      <td>${product.productRate}</td>
      <td>${product.productQuanity}</td>
      <td><button type="button" class="btn btn-primary float-end my-3" data-id="${product.id}" id="updBtn">Update</button></td>
      <td><button type="button" class="btn btn-primary float-end my-3" data-id="${product.id}" id="delBtn">Delete</button></td>
      </tr>`;
  }

  document.getElementById('table').innerHTML = row;
}



var delBtns = document.querySelectorAll('[data-id]');;
for (var i = 0; i < delBtns.length; i++) {
  delBtns[i].addEventListener('click', function() {
    deleteItem(this.dataset.id); // Use `this.dataset.id` to get the product ID
  });
}


function deleteItem(id) {
localStorage.removeItem(id);


// Remove the deleted product from the Data array as well

printDataInTable();
}








function updateItem(id) {
  var updateBtn = document.querySelector('#updBtn');

  updateBtn.addEventListener('click', function() {
    // Get the updated product data from the form fields
    var updatedProductName = document.getElementById('productName').value;
    var updatedProductPrice = document.getElementById('productPrice').value;
    var updatedProductDesc = document.getElementById('productDesc').value;
    var updatedProductRate = document.getElementById('productRate').value;
    var updatedProductQuantity = document.getElementById('productQuantity').value;

    // Create an updated product object
    var updatedProduct = {
      id: id,
      productName: updatedProductName,
      productPrice: updatedProductPrice,
      productDesc: updatedProductDesc,
      productRate: updatedProductRate,
      productQuanity: updatedProductQuantity
    };

    // Update the product in local storage
    localStorage.setItem(id, JSON.stringify(updatedProduct));

    // Update the product in the Data array
    Data = Data.map(product => product.id === id ? updatedProduct : product);

    // Update the table to reflect the changes
    printDataInTable(Data);
  });
}
