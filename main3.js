(async function getApi(){
    var item =await fetch("https://jsonplaceholder.typicode.com/photos");
    var element =await item.json();
    
    var myText = "";
    
    for(var i=0; i<element.length; i++){
    
    var cartoona= `<div class="col-md-4">
                  <img src="${element[i].url}"class="img-fluid">
                 <h2>${element[i].title}</h2>
                 <h5>${element[i].id}</h5>
                 </div>`;
    
    myText =myText+cartoona;
    }
    document.querySelector(".test").innerHTML = myText;
   })();