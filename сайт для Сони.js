const checkboxElements = document.querySelectorAll('[name="product"]');
let quantityElements = document.querySelectorAll('[name="quantity"]');
const result = document.querySelector('.result');
const btn = document.querySelector('.btn');
const field = document.querySelector('.product');
const userName = document.querySelectorAll('.name');
const userSurname = document.querySelector('.surname');









btn.addEventListener("click", function() {
    let elements = [];
    for (element of checkboxElements) {
        if (element.checked) {
            elements.push(element.value);
        } else {
            elements.push("0");
        }
    }
    let quantities = [];
    for (quantity of quantityElements) {
        quantities.push(quantity.value);
    }
    alert(elements, quantities);
})

let sum = 0;
function summa(quantities, elements) {
    for (let i=0; i<7; i++) {
        sum += parseInt(quantities[i])*parseInt(elements[i]);
    }
}
console.log(Math.round(10.25, 10));