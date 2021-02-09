
let category_menu = document.getElementById('menu-accordeon');

let sctgContinner = document.getElementById('sctgContinner');

// get category from db 

axios.get('http://localhost:8080/category')
.then(function (response) {
  
    response.data.forEach(element => {
        category_menu.innerHTML += `<li><a  href="sousCategory.html?id=${element._id}"><img src="images/Rectangle_21.png" alt=""><h5>${element.nom}</h5></a></li>`
        
    });
    
}).catch(function (err) {
    console.log(err);
});

// --------------------get all sous category --------------------


axios.get('http://localhost:8080/sousCategory')
.then(function (response) {

    for (let i = 0; i < 8; i++) {
        sctgContinner.innerHTML += `<div class="col-lg-3">
        <div class="D" style="margin-left: 28%;">
          <div class="circle mx-auto">
            <img src="images/mcdo-460x460 (2).png" alt="">
            <h4>${response.data[i].nom}</h4>
          </div>
        </div>

      </div> ` 
        


      
    }

   


    

    
  
   
    
}).catch(function (err) {
    console.log(err);
});












