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

const openLoginPage = function LoginOpen() {
  window.open("");
};

openLoginPage();
countingFunction();

var opened = window.open("");
opened.document.write(
  "<html><head><title>MyTitle</title></head><body>test</body></html>"
);
