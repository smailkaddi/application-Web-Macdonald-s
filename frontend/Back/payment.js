const total = localStorage.getItem('total');
document.querySelector('.total').innerText = total;


pay = document.getElementById('pay');

pay.addEventListener('click', () => {
    
    window.location.href = "invoice.html";
})



