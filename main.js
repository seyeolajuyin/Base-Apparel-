// variables

const form = document.getElementById("form")
const emailForm = document.getElementById("emailForm");
const smallMessage = document.getElementById("error-message");
const errorIcon = document.querySelector(".error-icon");

// functions
function emailCheck() {
  const emailVal = emailForm.value;
  // check if email is valid

  if (!validEmail(emailVal)) {
    smallMessage.classList.add("errorMessage");
    errorIcon.classList.add("errorMessage");
    emailForm.classList.add("errorBorder");
  } else {
    smallMessage.classList.remove("errorMessage");
    errorIcon.classList.remove("errorMessage");
    emailForm.classList.remove("errorBorder");
  }
}

// event listener

form.addEventListener("submit", (e) => {
  e.preventDefault();

  emailCheck();
});

// regex email validation
function validEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
