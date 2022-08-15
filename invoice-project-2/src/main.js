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

////////////////////////////////////////////////////////////////
// When the user clicks on the button, toggle between hiding and showing the dropdown content
const myFunction = function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
};

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
