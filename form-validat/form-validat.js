const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("passwordcheck");
const title = document.getElementById("formTitle");
const confirmGroup = document.getElementById("confirmPasswordGroup");
const switchBtn = document.getElementById("switchBtn");
const mainBtn = document.getElementById("mainButton");
const forgot = document.getElementById("forgotPassword");
const themeToggleBtn = document.getElementById("themeToggleBtn");

let isSignUp = false;
let isDarkMode = true;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInputs();
});

function toggleForm() {
  isSignUp = !isSignUp;
  if (isSignUp) {
    title.innerText = "Create Account";
    confirmGroup.style.display = "flex";
    forgot.style.display = "none";
    mainBtn.innerText = "Enter";
    switchBtn.innerText = "Back to Login";
  } else {
    title.innerText = "Welcome Back";
    confirmGroup.style.display = "none";
    forgot.style.display = "block";
    mainBtn.innerText = "Login";
    switchBtn.innerText = "New? Sign Up";
  }
  clearFields();
}

function clearFields() {
  [username, email, password, passwordCheck].forEach((input) => {
    input.value = "";
    setNeutral(input);
  });
}

function checkInputs() {
  const uVal = username.value.trim();
  const eVal = email.value.trim();
  const pVal = password.value.trim();
  const pcVal = passwordCheck.value.trim();

  if (uVal === "") {
    setErrorFor(username, "Username cannot be empty");
  } else {
    setSuccessFor(username);
  }

  if (eVal === "") {
    setErrorFor(email, "Email cannot be empty");
  } else if (!isEmail(eVal)) {
    setErrorFor(email, "Enter a valid email");
  } else {
    setSuccessFor(email);
  }

  if (pVal === "") {
    setErrorFor(password, "Password cannot be empty");
  } else {
    setSuccessFor(password);
  }

  if (isSignUp) {
    if (pcVal === "") {
      setErrorFor(passwordCheck, "Confirm your password");
    } else if (pVal !== pcVal) {
      setErrorFor(passwordCheck, "Passwords do not match");
    } else {
      setSuccessFor(passwordCheck);
    }
  }
}

function sendPassword() {
  const eVal = email.value.trim();
  if (eVal === "") {
    alert("Please enter your email to send password.");
  } else if (!isEmail(eVal)) {
    alert("Enter a valid email first.");
  } else {
    alert(`Password sent to ${eVal}`);
  }
}

function setErrorFor(input, message) {
  const parent = input.parentElement;
  const small = parent.querySelector("small");
  parent.className = "controlform fail";
  small.innerText = message;
}

function setSuccessFor(input) {
  const parent = input.parentElement;
  parent.className = "controlform success";
}

function setNeutral(input) {
  const parent = input.parentElement;
  parent.className = "controlform";
  parent.querySelector("small").innerText = "";
}

function isEmail(email) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

// Dark mode toggle
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  isDarkMode = !isDarkMode;
  themeToggleBtn.innerText = isDarkMode ? "Toggle Light Theme" : "Toggle Dark Theme";
});
