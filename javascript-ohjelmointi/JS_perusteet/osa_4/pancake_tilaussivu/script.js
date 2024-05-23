
let input = document.getElementsByClassName('customization-section');
const checkboxes = document.querySelectorAll("input[type='checkbox'");
const output = document.getElementById('totalPrice');

for(let input of checkboxes){
input.addEventListener('change', function(){
  let totalPrice = 0;
  checkboxes.forEach(function(checkbox){
    if(!checkbox.checked) return;
    
    totalPrice += parseFloat(checkbox.value) || 0;
  });
  output.innerText = totalPrice + '€';
});
};