var urlString = window.location.search;
var urlParam = new URLSearchParams(urlString);
const id = urlParam.get('id');
let sctgItemContinner = document.getElementById('sctgItemContinner');

console.log(id)


axios.get(`http://localhost:8080/sousCategory/${id}`)
    .then(function(response) {
        response.data.forEach(element => {
            sctgItemContinner.innerHTML += `    <div class="col-lg-3">
        <div class="D" style="margin-left: 28%;">
          <div class="circle mx-auto">
          <img src="images/${element.picname}.png" alt="" style="
          height: 199px;">
  
            <a href="product.html?id=${element._id}" style="    font-size: 20px;
            margin-left: 32%;
            /* margin-top: -37%; */
            color: darkgreen;
            font-weight: bold;">${element.nom}</a>
          </div>
        </div>
      </div>`
        });
    }).catch(function(err) {
        console.log(err);
    });