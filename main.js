var addBtn = document.getElementById('addBtn');
var productName = document.getElementById('productName');
var productId = document.getElementById('productId');
var productDesc = document.getElementById('productDesc');
var  productRate = document.getElementById('productRate');
var quantity = document.getElementById('productQuantity');
var productPrice = document.getElementById('productPrice');

var Data = [];

addBtn.addEventListener('click' , function(){
    addProduct();
})



function addProduct(){
  
  
  var jsonstr = setData(Data);
  
  printDataInTable(Data);
  addToLocalStorage(jsonstr);
  //if (addToLocalStorage(Data)==true) {
    //Data = [];
//  }else {alert("Error while adding Product.");
//}
}




// debugger;
function setData(){

    var Object = {
       id: productId.value,
       productName : productName.value ,
       productPrice : productPrice.value,
       productDesc : productDesc.value,
       productRate : productRate.value,
       productQuanity : quantity.value,
       
    };
    
    Data.push(Object);
    
 
 var jsonString = JSON.stringify(Data);

//console.log(jsonString); 
return jsonString;


}



function addToLocalStorage(jsonstr){

id = 0;
for (var i = 0; i < Data.length; i++) {
  localStorage.setItem(id, jsonstr);

instorage= localStorage.getItem(id);  


console.log(instorage);

id++

}}



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



function deleteItem(id){
  var delBtn = document.getElementById('delBtn');

delBtn.addEventListener('click' , function (){
  localStorage.removeItem(id);
})

}

