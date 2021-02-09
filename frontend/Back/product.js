var urlString = window.location.search;
var urlParam = new URLSearchParams(urlString);
const id = urlParam.get('id');
let productContinner = document.getElementById('productContinner');

console.log(id)


axios.get(`http://localhost:8080/product/${id}`)
.then(function (response) {


    response.data.forEach(element => {
        productContinner.innerHTML += `<div class="col-lg-3">
        <div class="D" style="margin-left: 28%;">
          <div class="circle mx-auto">
           
            <img src="images/Groupe_21.png" style="  margin-left: 20%;">
            <p>${element.nom}</p>
            <h4>${element.prix}  DH</h4>
            <a href="#"><i class="fas fa-plus-circle" style="margin-left: 88%;
            font-size: 137%;
            color: green;"></i></a>
          </div>
        </div>
    
      </div>`  
    });



    
}).catch(function (err) {
    console.log(err);
});