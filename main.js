var nameWebsite = document.getElementById("name");
var urlWebsite = document.getElementById("url");
var arry = [];



  arry = JSON.parse(localStorage.getItem("infoWebsite"));
  display(arry);


  
function add(){


  if(vaild() == true){
    var  website = {
      name: nameWebsite.value,
      url : urlWebsite.value,
  }

    arry.push(website);
    display(arry);
    clear()
    localStorage.setItem("infoWebsite",JSON.stringify(arry));
  }
  
  else{
    alert(vaild())
  }

 
}




function display (list){
  var cartona = '';

    for(var i = 0; i < list.length; i++){
      cartona += `
       <tr>
      <td>${i + 1}</td>
      <td>${list[i].name}</td>
      <td><a href='${list[i].url}' target="-blank"> <i class="bi bi-eye-fill"></i> Visit </a></td>
      <td><button onclick="deleteitem()"> <i class="bi bi-trash3-fill"></i> Delete</button></td>


      </tr>

      `
     }

     document.getElementById("body").innerHTML = cartona;

 }




function deleteitem(index){
  arry.splice(index,1);
  localStorage.setItem("infoWebsite",JSON.stringify(arry));
  display(arry);
}



function clear(){

  nameWebsite.value = '';
  urlWebsite.value = '';


}



 
function vaild(){
  var nameReg = /^[a-z]{3,}$/i;
  var urlReg =   /^(https:\/\/)?(www\.)?[A-Za-z0-9_\.]{1,}\.[a-z]{3,}$/;
  
  if(nameReg.test(nameWebsite.value) == false){
       return 'Site name must contain at least 3 characters';
  }
   else if (urlReg.test(urlWebsite.value) == false){
    return 'Site URL must be a valid one';
  }
  
  else{
     return true  
  }
  

}



