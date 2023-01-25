function smashChallenge() {
  let now = new Date();
  console.log(now);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  let day = days[now.getDay()];
  console.log(day);
  let time = now.getTime();
  console.log(time);
  let hours = now
    .getHours()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });

  let mins = now
    .getMinutes()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });

  let today = document.querySelector("h2");
  today.innerHTML = `${day}, ${hours}:${mins}`;
}

smashChallenge();

function changeCity(event) {
  event.preventDefault();
  let form = document.querySelector("#cityText");
  console.log(form);
  let city = document.querySelector("h1");
  city.innerHTML = form.value;
  let userCity = document.querySelector("#titleCity");
  userCity.innerHTML = `5 day forecast for ${form.value}`;
}

let win = document.querySelector("#newCity");
win.addEventListener("submit", changeCity);

let currentTemperature = 5;

function convertToFahrenheit() {
  currentTemperature = (currentTemperature * 9) / 5 + 32;
  document.querySelector("strong").innerHTML = currentTemperature + "°";
}

function convertToCelsius() {
  currentTemperature = ((currentTemperature - 32) * 5) / 9;
  document.querySelector("strong").innerHTML = currentTemperature + "°";
}

let degCel = document.querySelector(".c");
degCel.addEventListener("click", convertToCelsius);

let degFah = document.querySelector(".f");
degFah.addEventListener("click", convertToFahrenheit);
