const success = document.getElementById("success");
const failure = document.getElementById("fail");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const submitBtn = document.getElementById("btn");
let isValidEmail = false;
let isValidPhone = false;
let isValidName = false;
name.addEventListener("blur", () => {
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}$/;
  let str = name.value;

  if (regex.test(str)) {
    name.classList.remove("is-invalid");
    isValidName = true;
  } else {
    name.classList.add("is-invalid");
    isValidName = false;
  }
});
email.addEventListener("blur", () => {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let str = email.value;
  if (regex.test(str)) {
    email.classList.remove("is-invalid");

    isValidEmail = true;
  } else {
    email.classList.add("is-invalid");
    isValidEmail = false;
  }
});
password.addEventListener("blur", () => {
  let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  let str = password.value;
  if (regex.test(str)) {
    password.classList.remove("is-invalid");
  } else {
    password.classList.add("is-invalid");
  }
});
phone.addEventListener("blur", () => {
  let regex = /^([0-9]){10}$/;
  let str = phone.value;
  if (regex.test(str)) {
    phone.classList.remove("is-invalid");
    isValidPhone = true;
  } else {
    phone.classList.add("is-invalid");
    isValidPhone = false;
  }
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (isValidEmail && isValidPhone && isValidName) {
    success.classList.add("show");
    failure.classList.remove("show");
  } else {
    failure.classList.add("show");
    success.classList.remove("show");
  }
});
