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

login.addEventListener("click", loginForm);

////////////////////////////////////////////////////////////////
// login stuff again

// Get the modal
var modal = document.getElementById("loginID01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// /////////////////////////////////////////////////////////////////

// IDs for the table
const mondayIDs = { monSite, monShift, monPay };
const tuesdayIDs = { tueSite, tueShift, tuePay };
const wednesdayIDs = { wedSite, wedShift, wedPay };
const thursdayIDs = { thuSite, thuShift, thuPay };
const fridayIDs = { friSite, friShift, friPay };
const saturdayIDs = { satSite, satShift, satPay };
const sundayIDs = { sunSite, sunShift, sunPay };
const totalID = totalID;

const tableIDs = {
  mondayIDs,
  tuesdayIDs,
  wednesdayIDs,
  thursdayIDs,
  fridayIDs,
  saturdayIDs,
  sundayIDs,
};
