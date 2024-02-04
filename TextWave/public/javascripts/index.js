const SignUp = document.getElementById("sign");
const logo = document.getElementById("logo");
const join = document.getElementById("join");
const login = document.getElementById("login");

logo.addEventListener("click", () => {
  window.location.href = "/";
});

join.addEventListener("click", () => {
  window.location.href = "/sign-in";
});

SignUp.addEventListener("click", () => {
  window.location.href = "/sign-in";
});

login.addEventListener("click", () => {
  window.location.href = "/login";
});
