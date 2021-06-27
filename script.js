let name = document.querySelector("#first-name");
let surname = document.querySelector("#last-name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let button = document.querySelector('#submit-button');
let errorMess = document.querySelector(".error-message");



document.addEventListener('invalid', (function(){
    return function(e) {
      //prevent the browser from showing default error bubble / hint
      e.preventDefault();
      // optionally fire off some custom validation handler
      // myValidation();
    };
})(), true);

button.addEventListener("click", function(event) {
    if(name.validity.valueMissing) {
        
        name.classList.add("red-border");
        name.nextElementSibling.classList.add("show");
        setTimeout(function(){
        name.nextElementSibling.classList.remove("show"); 
        name.classList.remove("red-border");}, 3500)
    } 
    if(surname.validity.valueMissing) {
      
      surname.nextElementSibling.classList.add("show");
      surname.classList.add("red-border");
      setTimeout(function(){
        surname.nextElementSibling.classList.remove("show"); 
        surname.classList.remove("red-border");}, 3500)
  }
  if(email.validity.valueMissing || email.validity.typeMismatch) {
    
    email.nextElementSibling.classList.add("show");
    email.classList.add("red-border");
    setTimeout(function(){
      email.nextElementSibling.classList.remove("show"); 
      email.classList.remove("red-border");}, 3500)
    }

if(password.validity.valueMissing) {
  
  password.nextElementSibling.classList.add("show");
  password.classList.add("red-border");
  setTimeout(function(){
    password.nextElementSibling.classList.remove("show"); 
    password.classList.remove("red-border");}, 3500)

}

});

