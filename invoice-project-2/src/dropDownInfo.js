const site = {
  Site: [
    "Waterside Essex",
    "Dunton Court",
    "New Forest Glades",
    "milford on sea",
    "leicester",
    "Did Not Work",
  ],
};

const shift = {
  Shift: ["day", "night", "double", "Did Not Work"],
};

const pay = {
  Pay: ["150", "300", "Did Not Work"],
};

const users = {
  users: [
    "Aaron Norton",
    "Brinz",
    "Colin wilby",
    "David Scott",
    "Erhan Husseyin",
    "Ersan Husseyin",
    "Jolly Luke",
    "Nick Porter",
    "Nivaldo Nelson Gomes",
    "Okey Chukwurah",
    "Omar Omar",
    "Osman Osman",
    "Roland Egbe",
    "Ryan Messenger",
    "Yusuf Ozkan",
  ],
};

function siteDropdown() {
  document.getElementById("siteDropdown").classList.toggle("show");
}

const reuseableFunction = (window.onload = function () {
  const siteSel = document.getElementById("siteDropdown");
  const shiftSel = document.getElementById("shiftDropdown");
  const paySel = document.getElementById("payDropdown");

  for (const x in site) {
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
