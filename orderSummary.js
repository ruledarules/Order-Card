// DOM response on click

let payButton = document.querySelector('#pay');

payButton.addEventListener('click', function(){
    window.alert(`Processing order. Dont refresh the page.`);
});