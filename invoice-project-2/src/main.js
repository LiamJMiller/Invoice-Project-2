"use strict";

const countingFunction = function counter() {
  let seconds = 0;
  setInterval(() => {
    seconds += 1;
    document.getElementById(
      "app"
    ).innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
  }, 1000);
};
countingFunction();

///////////////////////////////////////////////////////////////////

const login = document.querySelector(".login");
const formLogin = document.querySelector(".login-form");

const loginForm = function loginForm() {
  login.classList.add("active");
  login.classList.remove("inactive");
  formLogin.classList.remove("hide");
};

// login.addEventListener("click", loginForm);
