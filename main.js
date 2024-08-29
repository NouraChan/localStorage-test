var addBtn = document.getElementById('addBtn');
var productName = document.getElementById('productName');
var ID = document.getElementById('productId');
var productDesc = document.getElementById('productDesc');
var  productRate = document.getElementById('productRate');
var quantity = document.getElementById('productQuantity');
var productPrice = document.getElementById('productPrice');



var inputsData = [];
// debugger;
function setData(){

    var inputObject = {
       id: ID.value,
       productName : productName.value ,
       productPrice : productPrice.value,
       productDesc : productDesc.value,
       productRate : productRate.value,
       productQuanity : quantity.value,
       
    };
    
    inputsData.push(inputObject);
    
 
 var jsonString = JSON.stringify(inputsData);

console.log(jsonString); 
printDataInTable(inputsData);


id = 0;
for (var i = 0; i < inputsData.length; i++) {
  localStorage.setItem(id, inputsData);

instorage= localStorage.getItem(id);  
console.log(instorage);

id++

}

}

function deleteItem(){
  var delBtn = document.getElementById('delBtn');

delBtn.addEventListener('click' , function (){
  localStorage.removeItem(10);
})

}



addBtn.addEventListener('click' , function(){
    setData();
})












function printDataInTable(data) {
    var row = ``;
    for (let i = 0; i < data.length; i++) {
        row += `
        <tr><td>${data[i].id}</td>
        <td>${data[i].productName}</td> 
        <td>${data[i].productPrice}</td>
        <td>${data[i].productDesc}</td>
        <td>${data[i].productRate}</td>
        <td>${data[i].productQuanity}</td>
        <td><button type="button" class="btn btn-primary float-end my-3">Update</button><td>
        <td><button type="button" class="btn btn-primary float-end my-3" id="delBtn">Delete</button></td>
        </tr>`
       
    }
    document.getElementById('table').innerHTML=row;

}
