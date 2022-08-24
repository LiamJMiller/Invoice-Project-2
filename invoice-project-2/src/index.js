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
const subjectObject = {
  "Front-end": {
    HTML: ["Links", "Images", "Tables", "Lists"],
    CSS: ["Borders", "Margins", "Backgrounds", "Float"],
    JavaScript: ["Variables", "Operators", "Functions", "Conditions"],
  },
  "Back-end": {
    PHP: ["Variables", "Strings", "Arrays"],
    SQL: ["SELECT", "UPDATE", "DELETE"],
  },
};

const subjectObjectFunction = (window.onload = function () {
  const subjectSel = document.getElementById("subject");
  const topicSel = document.getElementById("topic");
  const chapterSel = document.getElementById("chapter");
  for (const x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function () {
    //empty Chapters- and Topics- dropdowns
    chapterSel.length = 1;
    topicSel.length = 1;
    //display correct values
    for (let y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  };
  topicSel.onchange = function () {
    //empty Chapters dropdown
    chapterSel.length = 1;
    //display correct values
    const z = subjectObject[subjectSel.value][this.value];
    for (let i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  };
});

const reuseableFunction = (window.onload = function () {
  const siteSel = document.getElementById("siteDropdown");
  const shiftSel = document.getElementById("shiftDropdown");
  const paySel = document.getElementById("payDropdown");

  for (const x in subjectObject) {
    siteSel.options[siteSel.options.length] = new Option(x, x);
  }
  siteSel.onchange = function () {
    //empty Chapters- and Topics- dropdowns
    shiftSel.length = 1;
    paySel.length = 1;
    //display correct values
    for (let y in subjectObject[this.value]) {
      shiftSel.options[shiftSel.options.length] = new Option(y, y);
    }
  };
  shiftSel.onchange = function () {
    //empty Chapters dropdown
    paySel.length = 1;
    //display correct values
    const z = subjectObject[siteSel.value][this.value];
    for (let i = 0; i < z.length; i++) {
      paySel.options[paySel.options.length] = new Option(z[i], z[i]);
    }
  };
});
