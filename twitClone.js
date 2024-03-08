let password = document.getElementById('password');
let push = document.getElementsByClassName('push');
let input = document.forms['signForm']['name'].value;
let checker = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
let store = [];
let newPassword = document.getElementById('newPassword');
let newUser = [];
let email = document.getElementById('newEmail');
let emailChecker = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function check() {
  if(password.value.match(checker)) {
    console.log('yes');
  } else {
    console.log('nope')
  }
   if(store[input] == true) {
    alert('good job, this was not intended. Please make an account to move on with this project.')
 } else {
  alert('No account with that Username exists');
 }
}
function checkNew() {
  if(newPassword.value.match(checker)) {
    console.log('yes');

    newUser = document.getElementById('newUsername')
    console.log(newUser.value);

    if(email.value.match(emailChecker)) {
      console.log('email works')
      window.location.href = 'yourPage.html';
    }
  } 
   else {
    console.log('no')
  }
}