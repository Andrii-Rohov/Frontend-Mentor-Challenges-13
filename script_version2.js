let name = document.querySelector("#first-name");
let surname = document.querySelector("#last-name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let button = document.querySelector('#submit-button');
let errorMess = document.querySelector(".error-message");
let form = document.querySelector("#form");



document.addEventListener('invalid', (function(){
    return function(e) {
      //prevent the browser from showing default error bubble / hint
      e.preventDefault();
      // optionally fire off some custom validation handler
      // myValidation();
    };
})(), true);


form.addEventListener("input", function() {
    event.target.classList.remove('red-border');
    event.target.nextElementSibling.classList.remove('show');
})


button.addEventListener("click", function(event) {
    if(name.validity.valueMissing) {
        name.classList.add("red-border");
        name.nextElementSibling.classList.add("show");
    } 
    if(surname.validity.valueMissing) {
      surname.nextElementSibling.classList.add("show");
      surname.classList.add("red-border");
  }
  if(email.validity.valueMissing || email.validity.typeMismatch) {
    
    email.nextElementSibling.classList.add("show");
    email.classList.add("red-border");

    }

if(password.validity.valueMissing) {
  
  password.nextElementSibling.classList.add("show");
  password.classList.add("red-border");
}

});

