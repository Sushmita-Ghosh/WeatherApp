const button = document.querySelector(".button");
const inputValue = document.querySelector(".inputValue");
const name = document.querySelector(".name");
const desc = document.querySelector(".desc");
const temp = document.querySelector(".temp");
const display = document.querySelector(".display");

function fetchWeatherData() {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=`
  )
    .then((response) => response.json())
    .then((data) => {
      let nameValue = data.name;
      let tempValue = data.main.temp;
      let descValue = data.weather[0].description;

      console.log(descValue);

      name.innerHTML = nameValue;
      temp.innerHTML = tempValue;
      desc.innerHTML = descValue;

      if (tempValue > 300) {
        document.body.classList.add("clear");
      } else {
        document.body.classList.add("cloudy");
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

button.addEventListener("click", fetchWeatherData);
