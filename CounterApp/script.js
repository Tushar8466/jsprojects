let count = document.getElementById('count');
let button = document.getElementById('increment');

button.addEventListener('click' , ()=>{
    count.innerText = parseInt(count.innerText) + 1;
})