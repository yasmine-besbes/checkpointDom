let plus = document.querySelectorAll(".increase");
let moins = document.querySelectorAll(".decrease");
let valeur = document.querySelectorAll(".val");
let efface=document.querySelectorAll(".delete");
let likeButtons=document.querySelectorAll(".like");
let buy=document.getElementById("btn");
plus.forEach(function(button) {
    button.addEventListener('click',function(){
    button.nextElementSibling.innerHTML ++
    updateTotalPrice();
})
})

moins.forEach(function(button){
button.addEventListener('click',function(){
   var x=button.previousElementSibling.innerHTML
   if(x>0){
       button.previousElementSibling.innerHTML --
       updateTotalPrice();
    }

})
})
efface.forEach(function(button){
button.addEventListener('click',function(){
    let content = button.parentElement;
    content.remove(); // Supprime l'élément parent
    updateTotalPrice();
})

})

function calculateTotalPrice() {
let contentElements = document.querySelectorAll(".content");
let totalPrice = 0;

contentElements.forEach(function(content) {
let valElement = content.querySelector(".val");
let priceElement = content.querySelector(".PU");

let quantity = parseInt(valElement.textContent);
let unitPrice = parseInt(priceElement.textContent);

totalPrice += quantity * unitPrice;
});

return totalPrice;
}
function updateTotalPrice() {
let totalPrice = calculateTotalPrice();
let totalElement = document.getElementById("tot");
totalElement.textContent = totalPrice + " TND";
}

likeButtons.forEach(function(button) {
button.addEventListener('click', function() {
    button.style.backgroundColor = "#EC6082";
    
});
});

function Alert(){
    alert("Successful online purchase achievement!");
}
buy.onclick = Alert;


