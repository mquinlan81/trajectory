const regForm = document.getElementById('form');
const emailInput = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submitBtn = document.getElementById('submit-button');

submitBtn.disabled = true;


function passwordCheck() {
  if (password.value === confirmPassword.value) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

confirmPassword.addEventListener('keyup',passwordCheck)
