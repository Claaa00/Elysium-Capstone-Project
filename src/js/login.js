// Switch between login and forgot password form

var forgotPasswordForm = document.querySelector("#forgotPasswordForm");
var loginForm = document.querySelector("#loginForm");

document.querySelector("#forgotPasswordLink").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.add("hidden");
  forgotPasswordForm.classList.remove("hidden");
});

document.querySelector("#loginLink").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("hidden");
  forgotPasswordForm.classList.add("hidden");
});

// Input validation WHILE typing
//LOGIN FORM

var inputEmail = document.querySelector("#inputEmail");
var inputPassword = document.querySelector("#inputPassword");
var errorEmail = document.querySelector(".email-error");
var errorPassword = document.querySelector(".password-error");
var inputs = document.querySelectorAll(".login-input");
var buttonLogin = document.querySelector(".login-btn");

inputEmail.addEventListener("blur", (e) => {
  if (e.target.value.length < 1) { 
  }
});

inputEmail.addEventListener("input", (e) => {
  if (e.target.value.length >= 1) {
    errorEmail.style.display = "none";
  }
});

inputPassword.addEventListener("blur", (e) => {
  if (e.target.value.length < 1) {
    errorPassword.style.display = "block";
  }
});

inputPassword.addEventListener("input", (e) => {
  if (e.target.value.length >= 1) {
    errorPassword.style.display = "none";
  }
});

// Enables and disables login button
inputs.forEach(function (inputItem) {
  inputItem.addEventListener("input", function () {
    if (
      inputItem.value.length > 3 &&
      inputEmail.value.length > 3 &&
      inputPassword.value.length > 3
    ) {
      buttonLogin.ariaDisabled = false;
      buttonLogin.classList.add("enabled");
      buttonLogin.classList.remove("disabled");
    } else {
      buttonLogin.ariaDisabled = true;
      buttonLogin.classList.add("disabled");
      buttonLogin.classList.remove("enabled");
    }
  });
});

//FORGOT PASSWORD FORM

var inputNewPassword = document.querySelector("#inputNewPassword");
var retypeNewPassword = document.querySelector("#retypeNewPassword");
var errorNewPassword = document.querySelector(".new-password-error");
var errorRetypePassword = document.querySelector(".retype-password-error");
var buttonSubmit = document.querySelector(".submit-new-password-btn");
var lowercase = document.getElementById("lowercase");
var uppercase = document.getElementById("uppercase");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the error message
inputNewPassword.onfocus = function () {
  errorNewPassword.style.display = "block";
};

// When the user clicks outside of the password field, hide the error message
inputNewPassword.onblur = function () {
  errorNewPassword.style.display = "none";
};

// When the user starts to type something inside the password field
inputNewPassword.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (inputNewPassword.value.match(lowerCaseLetters)) {
    lowercase.style.display = "none";
  } else {
    lowercase.style.display = "block";
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (inputNewPassword.value.match(upperCaseLetters)) {
    uppercase.style.display = "none";
  } else {
    uppercase.style.display = "block";
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (inputNewPassword.value.match(numbers)) {
    number.style.display = "none";
  } else {
    number.style.display = "block";
  }

  // Validate length
  if (inputNewPassword.value.length >= 8) {
    length.style.display = "none";
  } else {
    length.style.display = "block";
  }

  // Hide error message div if all requirements are fulfilled
  if (
    lowercase.style.display == "none" &&
    uppercase.style.display == "none" &&
    number.style.display == "none" &&
    length.style.display == "none"
  ) {
    errorNewPassword.style.display = "none";

    inputNewPassword.onfocus = function () {
      errorNewPassword.style.display = "none";
    };
  } else {
    errorNewPassword.style.display = "block";
  }
};

// Validate password inputs if matching or not and switch between enabled and disabled button
retypeNewPassword.addEventListener("input", () => {
  if (retypeNewPassword.value === inputNewPassword.value) {
    errorRetypePassword.style.display = "none";
    inputNewPassword.style.border = "1px solid #fff";
    retypeNewPassword.style.border = "1px solid #fff";

    buttonSubmit.ariaDisabled = false;
    buttonSubmit.classList.add("enabled");
    buttonSubmit.classList.remove("disabled");
  } else {
    errorRetypePassword.style.display = "block";
    inputNewPassword.style.border = "1px solid #f74040";
    retypeNewPassword.style.border = "1px solid #f74040";

    buttonSubmit.ariaDisabled = true;
    buttonSubmit.classList.add("disabled");
    buttonSubmit.classList.remove("enabled");
  }
});

// TO DO:

// SEARCH HOW TO DISABLE AND ENABLE A BUTTON WITH CONDITIONS //
// POP UP FOR SUCCESSFUL AND UNSUCCESSFUL SAVING OF PASSWORD
