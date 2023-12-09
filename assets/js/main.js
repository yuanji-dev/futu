const osDark = window.matchMedia("(prefers-color-scheme: dark)");
const modeSwitch = document.getElementById("mode-switch");

function darkModeOn() {
  document.documentElement.classList.add("dark-mode");
}
function darkModeOff() {
  document.documentElement.classList.remove("dark-mode");
}

const osDarkListener = (event) => {
  if (event.matches) {
    darkModeOn();
  } else {
    darkModeOff();
  }
};
osDark.addEventListener("change", osDarkListener);
osDarkListener(osDark);

modeSwitch.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark-mode")) {
    darkModeOff();
    localStorage.setItem("darkMode", "off");
  } else {
    darkModeOn();
    localStorage.setItem("darkMode", "on");
  }
});

if (localStorage.getItem("darkMode") === "on") {
  darkModeOn();
} else if (localStorage.getItem("darkMode") === "off") {
  darkModeOff();
}
