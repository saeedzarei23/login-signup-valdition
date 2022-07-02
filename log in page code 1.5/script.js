// we make our selection over here

// selection for sign in btns
const signInBtn = document.getElementById("signIn");
// selection for sign up btn
const signUpBtn = document.getElementById("signUp");
// selection for form btn
const fistForm = document.getElementById("form1");
// selection for form2 btn
const secondForm = document.getElementById("form2");
// selection for container btn
const container = document.querySelector(".container");
// selection for our login password
const passwordinput = document.querySelector("#password-login");
// selection for our login email
const emailLogin = document.querySelector("#email-login");
// selection for our signup password conform
const passwordConform = document.querySelector("#password-conform");
// selection for our signup password
const passwordsingUP = document.querySelector("#password-signup");
// selection for our signup email
const emailSignup = document.querySelector("#email-signup");
// selection for our signup name
const nameInput = document.querySelector("#name-input");
// we make selection for our terms
const term = document.querySelector("#terms");
//  we make selection for our errorlist on  html page over here
const errorList = document.querySelector("#error-list");
// we make selection for our errror container
const errrorContainer = document.querySelector(".error-container");
//we finish our selection over and we make our function in the next step

// we make empty Array to save all of our error masseges

// first we need to make two eventlistner for our 2 form and add submit
// and one event to it
fistForm.addEventListener("submit", (e) => {
  // we store our errors over here in this Array
  const errormagess = [];
  clearError();
  //   1 step is to our username is at lest 6 characters long
  if (nameInput.value.length < 6) {
    errormagess.push("User name must be at lest 6 characters");
  }
  //  2 step is to make sure our password at least is 10 characters long
  if (passwordsingUP.value.length < 10) {
    errormagess.push("password must at lest 10 characters");
  }
  // 2.1 this is for our password if it's empty
  if (passwordsingUP.value.length == "") {
    errormagess.push("you must fill out the password");
  }
  // 3 step we must check that our both password match with each other
  if (passwordConform.value !== passwordsingUP.value) {
    errormagess.push("password must match");
  }
  // 4 in here we know that if they cheached password or not
  if (!term.checked) {
    errormagess.push("you must checked the term");
  }
  //  5 in here we stop the form from sending if we have any error
  if (errormagess.length > 0) {
    e.preventDefault();
    showErrors(errormagess);
  }
});

// in this function we clear error that we show on the display
function clearError() {
  // you can do two things to show Errros once on of them
  // is to set the error list to emtpy sting
  errorList.innerHTML = "";
  // second way in while loop in this while loop we remove the
  // children one by one
  while (errorList.children[0] != null) {
    errorList.removeChild(errorList.children[0]);
  }
  errrorContainer.classList.remove("show");
}

//in this function we show why user can't sign up and what the resone
function showErrors(masseges) {
  // in here for each error we have we make li
  // and that li text is what we have in our errormasges
  // Array
  masseges.forEach((errormagess) => {
    const li = document.createElement("li");
    li.innerText = errormagess;
    // and then we append that li that we made to
    // error list so the user can see that
    errorList.appendChild(li);
  });
  // we show the error here with class of the show
  errrorContainer.classList.add("show");
}

secondForm.addEventListener("submit", (e) => {
  // we store our errors over here in this Array
  const errormagess = [];
  clearError();
  // this is for our Email
  if (emailLogin.value.length == 0 || "") {
    errormagess.push("pleas Fill out the email");
  }
  // this is for our password 
  if (passwordinput.value.length == 0 || "") {
    errormagess.push("pleas Fill out the password");
  }
  // this is for when we have Error 
  // and prevent us from 
  if (errormagess.length > 0) {
    e.preventDefault();
    showErrors(errormagess);
  }
});

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
